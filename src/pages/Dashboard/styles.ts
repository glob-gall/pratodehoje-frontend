import styled from 'styled-components'

export const  Container = styled.div`
  margin: 50px auto;
  max-width:550px;
`

export const  EquipamentsList = styled.div`
  position: absolute;
  top:200px;
  left:100px;

  h4{
    font-size:22px;
  }

  div{
    display:flex;
    flex-direction:column;

    div{
      align-items:center;
      margin-top:10px;
      flex-direction:row;
      input{
        cursor:pointer;
      }
      label{
        margin-left:10px;
      }
    }
  }
  
`

export const  Search = styled.div`
  h2{
    margin-left:15px;
    font-size:18px;
  }
  input{
    width:100%;
    border: 1px solid #000;
    border-radius:5px;

    margin-top:15px;
    padding:8px;

    font-size:16px;
    font-weight:500;
  }
`

export const  IngredientsList = styled.div`
  margin:25px 10px;
  display:flex;
  flex-wrap: wrap;
  div{
    display:flex;
    align-items:center;

    margin: 5px;
    background:#41C900;
    color:#fff;
    padding:10px;
    border-radius:10px;

    box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.2);

    button{
      margin-left:5px;

      background:transparent;
      border:0;
    }
  }
`

export const  RecipeList = styled.div`
  background:#fff;
  max-width:500px;
  padding:15px;
  border-radius:5px;
  div{
    display:flex;
    background:#F0F0F5;
    border-radius:5px;

    &+div{
      margin-top:15px;
    }
    img{
      margin:10px;
      width:150px;
      border-radius:5px;
    }
    div{
      display:flex;
      flex-direction:column;

      h3{
        margin-top:10px;
        font-size:22px;
      }
      p{
        margin-top:10px;
        font-weight:bold;
      }
      ul{
        display:flex;
        flex-wrap:wrap;
        flex-direction:row;
        list-style-type: none;
        margin:5px;
        li{
          color:#6c6c80;
          background:#c4c4c4;
          margin:3px;
          padding:2px;

          border-radius:5px;
        }
      }
    }
  }
`

