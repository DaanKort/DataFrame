import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IWeapons, INews } from "../interfaces/index";
import { requestWeaponData, requestNews } from "../actions/actions";
import CardPreview from "../components/card/cardPreview";
import Input from "../components/input/index";

export default function Weapons() {
  const weapons = useSelector<IWeapons, any>(state => state.weapons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestWeaponData());
  }, [dispatch]);

  let weaponData = weapons.weapons;

  console.log(weaponData);

  const [weaponValue, setWeaponValue] = useState("");
  const weaponSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeaponValue(e.target.value.toLowerCase());
  };
  const filteredWeapons = weaponData.filter(
    (item: any) => item.name.toLowerCase().indexOf(weaponValue) !== -1
  );

  return (
    <>
      <h1 className="weapons__title">Weapons</h1>
      <Input
        type="text"
        onInputChange={weaponSearch}
        inputWrapperClass="weapons__input"
        inputPlaceholder="Search..."
      />
      <section className="weapons boxed">
        {filteredWeapons.map((weapon: any, index: number) => (
          <CardPreview
            cardPreviewTitle={weapon.name}
            cardPreviewImage={weapon.wikiaThumbnail}
            key={index}
            cardPreviewButtonText="Details"
            cardPreviewButtonLink="#"
            cardPreviewButtonClass="button-primary card__button"
          >
            <p>{weapon.description}</p>
          </CardPreview>
        ))}
      </section>
    </>
  );
}
