import ReserveATableButton from "../../components/ReserveATableButton";
import FoodCard from "../../components/FoodCard";
const Main = () => {
    
    return(<>
    <div className="OneTwoGrid">
        <div>
            <h2 className="YellowText">SPECIALS</h2>
        </div>
        <div>
            <ReserveATableButton />
        </div>
    </div>
    <div className="OneThreeGrid">
        <FoodCard 
        img={"https://www.mygreekdish.com/wp-content/uploads/2013/05/Traditional-Greek-Salad-recipe-Horiatiki-Xoriatiki-1-scaled.jpg"}
        name={"Greek Salad"}
        price={"$12.99"}
        description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."}
        />
        <FoodCard 
        img={"https://www.mygreekdish.com/wp-content/uploads/2013/05/Traditional-Greek-Salad-recipe-Horiatiki-Xoriatiki-1-scaled.jpg"}
        name={"Greek Salad"}
        price={"$12.99"}
        description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."}
        />
        <FoodCard 
        img={"https://www.mygreekdish.com/wp-content/uploads/2013/05/Traditional-Greek-Salad-recipe-Horiatiki-Xoriatiki-1-scaled.jpg"}
        name={"Greek Salad"}
        price={"$12.99"}
        description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."}
        />
    </div>
    </>)
}

export default Main;