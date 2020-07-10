import React from 'react'
import { FiX } from 'react-icons/fi'

import ComidaImg from '../../images/comida.jpg'
import Header from '../../components/Header'
import {
  Container,
  ContainerFeed,
  Search,
  IngredientsList,
  RecipeList,
  EquipamentsList,
} from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <EquipamentsList>
          <h4>Você possui:</h4>
          <div>
            <div>
              <label htmlFor="a">
                <input type="checkbox" />
                Fogão
              </label>
            </div>
            <div>
              <label htmlFor="b">
                <input type="checkbox" />
                Forno
              </label>
            </div>
            <div>
              <label htmlFor="c">
                <input type="checkbox" />
                Churrasqueira
              </label>
            </div>
            <div>
              <label htmlFor="d">
                <input type="checkbox" />
                Grill
              </label>
            </div>
            <div>
              <label htmlFor="e">
                <input type="checkbox" />
                Micro-ondas
              </label>
            </div>
            <div>
              <label htmlFor="f">
                <input type="checkbox" />
                Geladeira
              </label>
            </div>
            <div>
              <label htmlFor="g">
                <input type="checkbox" />
                Freezer
              </label>
            </div>
            <div>
              <label htmlFor="h">
                <input type="checkbox" />
                Liquidificador
              </label>
            </div>
          </div>
        </EquipamentsList>
        <ContainerFeed>
          <Search>
            <h2>Pesquise pelo nome dos ingedientes que você tem em casa</h2>
            <input placeholder="digite o nome de um ingrediente..." />
          </Search>
          <IngredientsList>
            <div>
              <p>beterraba</p>
              <button type="button">
                <FiX color="#fff" size={14} />
              </button>
            </div>
            <div>
              <p>rabanete</p>
              <button type="button">
                <FiX color="#fff" size={16} />
              </button>
            </div>
            <div>
              <p>peixe</p>
              <button type="button">
                <FiX color="#fff" size={16} />
              </button>
            </div>
            <div>
              trigo
              <button type="button">
                <FiX color="#fff" size={16} />
              </button>
            </div>
            <div>
              amendoin
              <button type="button">
                <FiX color="#fff" size={16} />
              </button>
            </div>
            <div>
              fermento
              <button type="button">
                <FiX color="#fff" size={16} />
              </button>
            </div>
            <div>
              farinha de trigo
              <button type="button">
                <FiX color="#fff" size={16} />
              </button>
            </div>
          </IngredientsList>
          <RecipeList>
            <div>
              <img src={ComidaImg} alt="" />
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
        </ContainerFeed>
      </Container>
    </>
  )
}

export default Dashboard
