import * as React from 'react';
import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {ResponsiveCard, TrainingBox} from './StyledComponents';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import FindFirstChar from './FindFirstChar';
import {TRAINING_LIST_ARRAY} from './Training';

export default function TrainingBlocks() {
    const [trainingBlock, setTrainingBlock] = useState(TRAINING_LIST_ARRAY[0]);

    const handleClick = (e) => {
        //console.log(e.currentTarget.id);
        if (e.currentTarget.id === 'training-card-0') {
            setTrainingBlock(TRAINING_LIST_ARRAY[0]);
        } else 
        if (e.currentTarget.id === 'training-card-1') {
            setTrainingBlock(TRAINING_LIST_ARRAY[1]);
        } else
        if (e.currentTarget.id === 'training-card-2') {
            setTrainingBlock(TRAINING_LIST_ARRAY[2]);
        } else 
        if (e.currentTarget.id === 'training-card-0') {
            setTrainingBlock(TRAINING_LIST_ARRAY[0]);
        }
    }
    return (
            <Box>
                <Typography
                    variant='h3'
                    sx={{
                        margin: '20px 0',
                    }}>
                        Training Series
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                {
                    TRAINING_LIST_ARRAY.map((card, index) => {
                        return (

                        <ResponsiveCard 
                            key={index}
                            id={`training-card-${index}`}
                            onClick={handleClick}
                            sx={{
                                border: trainingBlock.id === (index + 1)
                                ?  '2px solid black'
                                : 'none'
                            }}
                        >
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {card.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </ResponsiveCard>

                        )

                    })
                }
                </Box>
                {trainingBlock.id === 1 
                    ?   <TrainingBox>
                            <FindFirstChar/>
                        </TrainingBox>
                : <TrainingBox>
                    
                </TrainingBox>
                }
            </Box>
    );
}

// ['@media only screen and (min-Width: 768px)']: {
//     width: '30%'
// },




