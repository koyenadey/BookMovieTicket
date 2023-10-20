import React,{FC} from "react";
import "./BiteHeader.scss";


interface BiteCategoriesProps{
    selectedCat: string,
    onCategoryChange:(category:BiteCategoriesType)=>void
}

type BiteCategoriesType = {
  id: string;
  category: string;
};

const BiteHeader:FC<BiteCategoriesProps> = (props) => {

    const {selectedCat,onCategoryChange} = props;

  //const [selectedCategory,setSelectedCategory] = useState<string>("ALL");


  const biteCategories: BiteCategoriesType[] = [
    { id: "C001", category: "ALL"},
    { id: "C002", category: "BEVERAGES"},
    { id: "C003", category: "SNACKS"},
    { id: "C004", category: "POPCORN"},
    { id: "C005", category: "COMBOS"},
  ];
  return (
    <div className="bite-header">
      <img
        src="https://assets-in.bmscdn.com/promotions/cms/creatives/1688188454571_855x95.jpg"
        alt="headerimage"
        style={{ height: "107px" }}
      />
      <div className="bite-sticky-header-filters">
        <h4>
          Grab a <span style={{ color: "maroon" }}>bite !</span>
        </h4>
        <p>Prebook Your Meal and Save More!</p>
        {biteCategories.map((category) => (
          <span
            className={
              selectedCat === category.category
                ? "all-food-filter cat-selected"
                : "all-food-filter"
            }
            key={category.id}
            onClick={()=>onCategoryChange(category)}
          >
            {category.category}
          </span>
        ))}
        {/* <span className={catIsSelected?"all-food-filter cat-selected":"all-food-filter"} onClick={handleCategoryChange}>ALL</span>
                <span className={bevIsSelected?"beverages-filter cat-selected":"beverages-filter"} onClick={handleBeverageChange}>BEVERAGES</span>
                <span className={snackIsSelected?"snacks-filter cat-selected":"snacks-filter"} onClick={handleSnackChange}>SNACKS</span>
                <span className={popcornIsSelected?"popcorn-filter cat-selected":"popcorn-filter"} onClick={handlePopcornChange}>POPCORN</span>
                <span className={comboIsSelected?"combo-filter cat-selected":"combo-filter"} onClick={handleCombosChange}>COMBOS</span> */}
      </div>
    </div>
  );
};

export default BiteHeader;
