import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CocktailCard.scss';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from 'react-router-dom';

function CocktailCard(props) {
    const { name, id, ingredients, image } = props.cocktail;

    // const handleButtonClick = () => {
    //     props.onToggleFavorite(id);
    // }

    return (
        // <Container>
            <Card className='cocktailCard'>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {ingredients.join(',')}
                    </Card.Text>
                    <ButtonGroup>

                        <Button
                            onClick={() => props.onToggleFavorite(id)}
                            variant="primary">
                            {props.isFavorite ? 'Remove' : 'Add to fav'}
                        </Button>
                        <Button
                            variant="primary">
                            <Link className={'link'} to={'/cocktails/details/' + id}>Details</Link>

                        </Button>
                    </ButtonGroup>
                </Card.Body>
            </Card>
        //  </Container>

    );
}

export default CocktailCard;