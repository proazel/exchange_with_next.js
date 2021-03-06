import MainLayout from '../../components/layout/MainLayout';
import Head from 'next/head';
import { useState } from 'react';
import useInput from '../../hooks/useInput';
import styled from 'styled-components';
import Router from 'next/router';

const JoinContainer = styled.div`
    position: fixed;
    width: 100%;
    margin-top: 104px;
    background: #222;
`

const Title = styled.div`
    position: fixed;
    bottom: 170px;
    left: 100px;
    & > h1 {
        font-size: 50px;
    }
`

const Content = styled.div`
    width: 500px;
    min-height: 600px;
    margin-top: 100px;
    margin-right: 100px;
    float: right;
    background: #fff;

    & > h4 {
        padding: 5px 10px;
        font-weight: normal;
        color: #fff;
        background: #000;
    }

    & > ul {
        width: 100%;
        height: 100px;
        flex-direction: row;
    }

    & > ul > li {
        height: 100%;
        color: #000;
        background: pink;
    }


`

const Join = () => {
    const userid = useInput('')
    const username = useInput('')
    const userphone = useInput('')
    const userpassword = useInput('')

    const [passwordCheck,setPasswordCheck] = useState('')
    const [passwordError,setPasswordError] = useState(false)

    const handlePassword = e => {
        const {value} = {...e.target}
        setPasswordError(userpassword.value !== value) // 1234 === 1234 ture
        setPasswordCheck(value)
    }

    const [term,setTerm] = useState(false)
    const [termError,setTermError] = useState(false)

    const handleTerm = e => {
        setTermError(e.target.checked !== true) 
        setTerm(e.target.checked)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(userpassword.value !== passwordCheck) {
            setPasswordError(true)
            return
        } else {
            setPasswordError(false)
        }

        if(!term) {
            setTermError(true)
            return; 
        }

        console.log({
            userid:userid.value,
            username:username.value,
            userpw:userpassword.value,
            userphone:userphone.value
        })
    }

    return(
        <>
            <Head>
                <title>???????????? | ????????????</title>
            </Head>
            <MainLayout>
                <JoinContainer>
                    <Title>
                        <h1>???????????? ????????????</h1>
                    </Title>
                    <Content>
                        <h4>?????? ??????</h4>
                        <form onSubmit={handleSubmit}>
                            <ul>

                            </ul>
                            <input type="text" {...userid} placeholder="???????????? ??????????????????."/> <br/>
                            <input type="text" {...username} placeholder="????????? ??????????????????." /> <br/>
                            <input type="password" {...userpassword} placeholder="??????????????? ??????????????????."/> <br/>
                            <input type="password" value={passwordCheck} onChange={handlePassword} placeholder="??????????????? ?????? ??????????????????."/> <br/>
                            { passwordError && <div style={{color:'red'}}>??????????????? ???????????? ????????????.</div> }
                            <button type="submit">????????????</button>
                            <p onClick={()=>Router.back()}>????????????</p>
                        </form>
                    </Content>
                </JoinContainer>
            </MainLayout>
        </>
    );
}

export default Join;