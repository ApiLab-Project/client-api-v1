 
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { CardImg1, ContainerCards } from "./styled.CardsPage";
import bg03 from './../../assets/images/bg03.svg'
export default function CardsPage() {
    const [flip, setFlip] = useState(false);
    return (
        <ContainerCards>
        <ReactCardFlip isFlipped={flip}
            flipDirection="vertical">
            <div className="cardBox"  style={{
            }}>
                <h2>Title</h2>
                <p style={{
                    fontSize: '1rem',
                    color: 'gray'
                }}>Lorem ipsum dolor ius eos minima dicta vitae soluta. Autem aliquid, ratione repudiandae quis est reprehenderit sed dicta quia nisi inventore officia quasi.</p>

                <button style={{
                    position: 'absolute',
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: 'black',
                    fontWeight: 'bold',
                    color: 'whitesmoke',
                    borderRadius: '5px',
                    maxHeight: '65px',
                    marginTop: '35%'
                }} onClick={() => setFlip(!flip)}>
                    Flip</button>
            </div>
            <div className="cardBox" style={{
                width: '300px',
                height: '200px',
                background: '#fbd7f8',
                fontSize: '40px',
                color: 'blue',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
                
            }}>
                Computer Science Portal.
                <br />
                <button style={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: '#f5d9fa',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    maxHeight: '45px',
                    marginTop: '30%'
                }} onClick={() => setFlip(!flip)}>
                    Flip</button>
            </div>
        </ReactCardFlip>
        </ContainerCards>
    );
}
 