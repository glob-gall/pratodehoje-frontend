import React from 'react'
import {FiX} from 'react-icons/fi'

import ComidaImg from '../../images/comida.jpg'
import Header from '../../components/Header' 
import {Container,Search,IngredientsList,RecipeList,EquipamentsList} from './styles'

const Dashboard : React.FC = ()=>{
  return (
    <>
      <Header/>
      <Container>
      <EquipamentsList>
        <h4>Você possui:</h4>
        <div>
          <div>
              <input type="checkbox"/>
            <label htmlFor="">Fogão</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label htmlFor="">Forno</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label htmlFor="">Churrasqueira</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label htmlFor="">Grill</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label htmlFor="">Micro-ondas</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label htmlFor="">Geladeira</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label htmlFor="">Freezer</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label htmlFor="">Liquidificador</label>
          </div>
        </div>
      </EquipamentsList>
        <Search>
          <h2>Pesquise pelo nome dos ingedientes que você tem em casa</h2>
          <input placeholder="digite o nome de um ingrediente..."/>
        </Search>
        <IngredientsList>
          <div>
            <p>beterraba</p>
            <button>
              <FiX color="#fff" size={14}/>
            </button>
          </div>
          <div>
            <p>rabanete</p>
            <button>
              <FiX color="#fff" size={16}  />
            </button>
          </div>
          <div>
            <p>peixe</p>
            <button>
              <FiX color="#fff" size={16}  />
            </button>
          </div>
          <div>
            trigo
            <button>
              <FiX color="#fff" size={16}  />
            </button>
          </div>
          <div>
            amendoin
            <button>
              <FiX color="#fff" size={16}  />
            </button>
          </div>
          <div>
          fermento
            <button>
              <FiX color="#fff" size={16}  />
            </button>
          </div>
          <div>
          farinha de trigo
            <button>
              <FiX color="#fff" size={16}  />
            </button>
          </div>
        </IngredientsList>
        <RecipeList>
          <div>
            <img src={ComidaImg} alt=""/>
            <div>
              <h3>Feijoada Quentinha</h3>
              <p>Ingredientes</p>
              <ul>
                <li>Feijão</li>
                <li>Pé de porco</li>
                <li>óleo</li>
                <li>farofa</li>
                <li>óleo</li>
                <li>farofa</li>
                <li>óleo</li>
                <li>farofa</li>
              </ul>
            </div>
          </div>
        </RecipeList>
      </Container>
    </>
  )
}

export default Dashboard