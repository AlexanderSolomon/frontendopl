import { Container, Grid } from '@mui/material'
import { grid } from '@mui/system'
import React from 'react'
import { MyCard } from '../components/MyCard'

export const Homepage = () => {
    return (
        <Container>
            <Grid container spacing={2}>
            {[1, 2, 3, 4].map(card => {
                return <Grid item xs={6} md={4}>
                    <MyCard></MyCard>
                </Grid>
            })}
            </Grid>
        </Container>

    )
}
