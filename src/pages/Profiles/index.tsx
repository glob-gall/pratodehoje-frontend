import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, GridContainer, CardContainer, CardProfile } from './styles'
import Image from '../../images/comida.png'
import api from '../../services/api'

interface ProfileInfo {
  id: number
  name: string
  recipes: number
  image_url: string
}

const Profiles: React.FC = () => {
  const [profiles, setProfiles] = useState<ProfileInfo[]>([])
  useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get('users')
      console.log(response.data)

      setProfiles(response.data)
    }
    loadUsers()
  }, [])
  return (
    <GridContainer>
      <Header page="profiles" />
      <Container>
        <CardContainer>
          {profiles.map(profile => (
            <CardProfile key={profile.id} to={`profile/${profile.id}`}>
              <img src={Image} alt="author" />
              <div>
                <div>
                  <h3>{profile.name}</h3>
                  <p>
                    receitas:
                    {profile.recipes}
                  </p>
                </div>
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
