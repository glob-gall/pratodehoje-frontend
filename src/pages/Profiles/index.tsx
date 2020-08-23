import React, { useState, useEffect } from 'react'
import { FiX } from 'react-icons/fi'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, GridContainer, CardContainer, CardProfile } from './styles'
import Image from '../../images/comida.png'
import Input from '../../components/Input'

interface ProfileInfo {
  id: number
  name: string
  starts: number
  totalRecipes: number
  image_url: string
}

const Profiles: React.FC = () => {
  const [profiles, setProfiles] = useState<ProfileInfo[]>([])
  useEffect(() => {
    const profile = {
      id: 0,
      name: 'joao',
      starts: 3,
      totalRecipes: 35,
      image_url: 'image_img',
    }
    const array: ProfileInfo[] = []
    for (let i = 0; i < 9; i += 1) {
      array[i] = profile
      array[i].id = i
    }
    setProfiles(array)
  }, [])
  return (
    <GridContainer>
      <Header page="profiles" />
      <Container>
        <CardContainer>
          {profiles.map(profile => (
            <CardProfile key={profile.id}>
              <img src={Image} alt="author" />
              <div>
                <div>
                  <h3>{profile.name}</h3>
                  <strong>{profile.totalRecipes}</strong>
                </div>
                <span>{profile.starts}</span>
              </div>
            </CardProfile>
          ))}
        </CardContainer>
      </Container>
      <Footer />
    </GridContainer>
  )
}

export default Profiles
