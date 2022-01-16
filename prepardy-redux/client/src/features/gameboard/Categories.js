import React from "react";
// import PropTypes from "prop-types";
import Category from "./Category";
// import { useSelector } from "react-redux";

// import { selectCluesByCategory } from "../game/cluesSlice"; 

const Categories = ({categories}) => {

    return (
        <div className="board" id="categories">
            {categories.map((category) => (
                <Category
                    title={category}
                />
            ))}
        </div>
    );
};

// Category.propTypes = {
//     categories: PropTypes.array
// };


export default Categories;
