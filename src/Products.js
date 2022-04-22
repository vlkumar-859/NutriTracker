import React from 'react'

const Products = ({data}) => {
    return (
        <div>
            <div className="row">
                {data.map(data =>  
                <div className="col-md-4">
                    <div class="card" style={{"width": "18rem"}}>
                    <img class="card-img-top" src={data.recipe.image} alt="Card image cap" />
                    <div class="card-body">
                    <center>
                        <h5 class="card-title">{data.recipe.label}</h5>
                        <p class="card-text">Total Calories : {Math.round(data.recipe.calories)}</p>
                        <p class="card-text">Fats : {Math.round(data.recipe.digest[0].total)}</p>
                        <p class="card-text">Carbs : {Math.round(data.recipe.digest[1].total)}</p>
                        <p class="card-text">Protein : {Math.round(data.recipe.digest[2].total)}</p>
                    </center>
                    </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}

export default Products
