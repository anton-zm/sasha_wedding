
import styled from 'styled-components'
import { ContentWrapper, SectionTitle } from './layouts'
import { useState } from 'react'
import { FormControl, FormControlLabel, Radio, Checkbox, RadioGroup, FormGroup } from '@mui/material'

interface IProps {
user: any
}
export const YourDecision = ({user}: IProps) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [drinks, setDrinks] = useState<any[]>([])


    const handleChange = (event: any) => {
        setSelectedOption(event.target.value);
    };
    const handleDrinkChange = (event: any) => {
        const { value, checked } = event.target;
        setDrinks((prevSelectedDrinks) =>
            checked
                ? [...prevSelectedDrinks, value]
                : prevSelectedDrinks.filter((drink) => drink !== value)
        );
    };

    const submit = async () => {
        const d = drinks.join(', ')
        const name = user.inner_name
        fetch(`https://api.stvorka34.ru/sasha?name=${name}&decision=${selectedOption}&drinks=${d}`)
    }
    
  return (
    <Wrapper>
        <ContentWrapper>
            <SectionTitle>Ваше присутствие</SectionTitle>
            <p className='user'>{user.call_name}</p>
            <p className="intro">Будем очень рады видеть Вас. Просим подтвердить своë присутствие до 01.12.2024</p>
            <FormWrapper>
            <Form>
                <p className='title'>Сможете ли вы присутствовать?</p>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        value={selectedOption}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="смогу/сможем" control={<Radio />} label="смогу/сможем" />
                        <FormControlLabel value="не смогу/не сможем" control={<Radio />} label="не смогу/не сможем" />
                    </RadioGroup>
                </FormControl>
            </Form>
            <Form>
                <p className='title'>Предпочтения по напиткам</p>
                <FormControl>
                    <FormGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                    >
                        <FormControlLabel value="шампанское" control={<Checkbox onChange={handleDrinkChange} />} label="шампанское" />
                        <FormControlLabel value="белое вино" control={<Checkbox onChange={handleDrinkChange} />} label="белое вино" />
                        <FormControlLabel value="красное вино" control={<Checkbox onChange={handleDrinkChange} />} label="красное вино" />
                        <FormControlLabel value="водка" control={<Checkbox onChange={handleDrinkChange} />} label="водка" />
                        <FormControlLabel value="безалк" control={<Checkbox onChange={handleDrinkChange} />} label="безалк" />
                    </FormGroup>
                </FormControl>
            </Form>
            <SubmitButton onClick={submit}>
                Отправить
            </SubmitButton>
            <div className="divider" />
            <p className="byebye">До встречи</p>
            </FormWrapper>
        </ContentWrapper>
    </Wrapper>
  )
}
const FormWrapper = styled.div`
    width: 300px;
    margin: 0 auto;
    @media (max-width: 1023px) {
    width: 100%;
    }
`
const SubmitButton = styled.button`
color: white;
background-color: black;
border-radius: 100px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin-top: 40px;
cursor: pointer;

`
const Form = styled.div`
margin-top: 60px;
& .title {
    font-weight: 700;
    font-size: 22px;
}
`
const Wrapper = styled.section`
 margin: 100px 0;
 & .user {
    font-size: 32px;
    padding-bottom: 10px;
    border-bottom: 2px solid #222;
    width: fit-content;
    margin: 40px auto;

    @media (max-width: 1023px) {
    font-size: 26px;
    }
 }
& .bye {
    text-align: center;
    width: 80%;
    margin: 0 auto;
}
& .byebye {
    margin: 100px auto 60px;
    text-align: center;
    font-size: 72px;

        @media (max-width: 1023px) {
        font-size: 66px;
        }
}
 & .divider {
    width: 200px;
    position: relative;
    margin: 100px auto;
    height: 2px;
        background-color: #222;
 }
 @media (max-width: 1023px) {
    margin-top: 60px;
 }

 & .intro {
    font-size: 24px;
    margin-top: 40px;
    text-align: center;
    @media (max-width: 1023px) {
        font-size: 18px;
    }
 }
` 
