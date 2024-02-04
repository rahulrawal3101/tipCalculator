'use client'
import { Box, Button, Grid, InputBase, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';

const HomePage = () => {
    const [billAmount, setBillAmount] = useState('');
    const [person, setPerson] = useState('');
    const [tipAmtPerPerson, setTipAmtPerPerson] = useState('0.00');
    const [totalAmtPerPerson,setTotalAmountPerPerson] = useState('0.00');
    const [customAmt,setCustomAmt] = useState('');
    
    // console.log(billAmount,person)
    // console.log(customAmt)

    const addTipAmount=(tipAmt)=>{
        // console.log(tipAmt);
        if(person >= 0){
            const billAmt = parseFloat(billAmount);
        let tip;
        if(tipAmt == 'custom'){
            tip = parseFloat(customAmt);
        }else{
            tip = billAmt * (tipAmt /100);
        }
        const total = billAmt + tip;
        const tipPerPerson = tip / person;
        const amountperPerson = total / person;
        setTipAmtPerPerson(tipPerPerson.toFixed(2));
        setTotalAmountPerPerson(amountperPerson.toFixed(2));
        }
        if(person == 0){
            alert('Please Choose the Person')
        }
        
    };

    const clearData=()=>{
        setBillAmount('');
        setPerson('');
        setTipAmtPerPerson('0.00');
        setTotalAmountPerPerson('0.00');
        setCustomAmt('');
    };

    const handleCustomTipAmt=(e)=>{
        setCustomAmt(e.target.value);
        addTipAmount(parseFloat(e.target.value));
    }
    return (
        <Grid container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item lg={6} md={9} sm={10} xs={12} sx={{ bgcolor: '#C5E4E7' }}>
                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pb: '70px' }}>
                    <Grid item xs={10} sx={{ pt: '70px', }}>
                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold', color: '#406667', fontStyle: 'unset', letterSpacing: '2px', textAlign: 'center' }}>SPLT<br /> TTER</Typography>

                    </Grid>
                    <Grid item xs={10} sx={{ mt: '40px', bgcolor: 'white', p: '20px', borderRadius: '7px' }}>
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
                            <Grid item lg={5.7} md={5.7} sm={10} xs={12} sx={{ p: '10px' }}>

                                <Typography sx={{ color: '#6B7777', fontSize: '11px', fontFamily: 'monospace', fontWeight: 'bold' }}>Bill</Typography>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#F3F8FB', borderRadius: '4px', mt: '5px' }}>
                                    <Typography sx={{ color: '#A9C3C6', p: '5px 0px 5px 5px', fontSize: '16px' }}>$</Typography>
                                    <input placeholder='0' type='number' style={{ display: 'block', backgroundColor: 'transparent', outline: 'none', textAlign: 'end', border: '3px solid transparent', color: '#00474B', fontWeight: 'bold' }} value={billAmount} onChange={(e)=>{setBillAmount(e.target.value)}}/>

                                </Box>

                                <Grid container>
                                    <Grid item xs={12} sx={{ mt: '15px' }}>
                                        <Typography sx={{ color: '#6B7777', fontSize: '11px', fontFamily: 'monospace', fontWeight: 'bold' }}>Select Tip %</Typography>
                                    </Grid>
                                </Grid>

                                <Grid container sx={{ mt: '22px', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Grid item xs={3.1} >
                                        <Button sx={{ bgcolor: '#00474B', color: 'white', p: '2px 8px', width: '100%', fontWeight: 'bold', '&:hover': { bgcolor: '#9FE8DD', color: '#00474B' } }} onClick={()=>{addTipAmount(5)}}>5%</Button>
                                    </Grid>
                                    <Grid item xs={3.1}>
                                        <Button sx={{ bgcolor: '#00474B', color: 'white', p: '2px 8px', width: '100%', fontWeight: 'bold', '&:hover': { bgcolor: '#9FE8DD', color: '#00474B' } }} onClick={()=>{addTipAmount(10)}}>10%</Button>
                                    </Grid>
                                    <Grid item xs={3.1}>
                                        <Button sx={{ bgcolor: '#00474B', color: 'white', p: '2px 8px', width: '100%', fontWeight: 'bold', '&:hover': { bgcolor: '#9FE8DD', color: '#00474B' } }} onClick={()=>{addTipAmount(15)}}>15%</Button>
                                    </Grid>
                                    <Grid item xs={3.1} sx={{ mt: '11px' }}>
                                        <Button sx={{ bgcolor: '#00474B', color: 'white', p: '2px 8px', width: '100%', fontWeight: 'bold', '&:hover': { bgcolor: '#9FE8DD', color: '#00474B' } }} onClick={()=>{addTipAmount(25)}}>25%</Button>
                                    </Grid>
                                    <Grid item xs={3.1} sx={{ mt: '11px' }}>
                                        <Button sx={{ bgcolor: '#00474B', color: 'white', p: '2px 8px', width: '100%', fontWeight: 'bold', '&:hover': { bgcolor: '#9FE8DD', color: '#00474B' } }} onClick={()=>{addTipAmount(50)}}>50%</Button>
                                    </Grid>
                                    <Grid item xs={3.1} sx={{ mt: '11px' }}>


                                        <input placeholder='custom' type='number' style={{ display: 'block', backgroundColor: '#F3F8FB', outline: 'none', textAlign: 'end', border: '3px solid transparent', color: '#00474B', fontWeight: 'bold', width: '91%', p: '5px 8px' }} value={customAmt} onChange={handleCustomTipAmt}/>

                                    </Grid>

                                    <Grid item xs={12} sx={{ mt: '25px' }}>
                                        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                            <Typography sx={{ color: '#6B7777', fontSize: '11px', fontFamily: 'monospace', fontWeight: 'bold' }}>Number of People</Typography>
                                            <Typography sx={{ color: '#B48372', fontSize: '11px', fontFamily: 'monospace', fontWeight: 'bold', }}>Can,t be zero</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#F3F8FB', borderRadius: '4px', mt: '5px' }}>

                                            <PersonIcon sx={{ color: '#A9C3C6', pl: '3px', fontSize: '20px' }} />
                                            <input placeholder='0' type='number' style={{ display: 'block', backgroundColor: 'transparent', outline: 'none', textAlign: 'end', border: '3px solid transparent', color: '#00474B', fontWeight: 'bold' }} value={person} onChange={(e)=>{setPerson(e.target.value)}}/>

                                        </Box>

                                    </Grid>
                                </Grid>

                            </Grid>

                            <Grid itemlg={5.7} md={5.7} sm={10} xs={12} sx={{ bgcolor: '#00474B', borderRadius: '7px', mt: { lg: '0px', md: '0px', sm: '20px', xs: '20px' } }}>
                                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '30px' }}>
                                    <Grid item xs={10} >
                                        <Grid container>
                                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Box>
                                                    <Typography sx={{ color: 'white', fontSize: '11px', fontFamily: 'monospace' }}>Tip Amount</Typography>
                                                    <Typography sx={{ color: '#649BA0', fontSize: '11px', fontFamily: 'monospace', ml: '7px' }}>/Person</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: '#21C3AC', fontFamily: 'monospace', fontSize: '21px', fontWeight: 'bold' }}>${tipAmtPerPerson}</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: '50px' }}>
                                                <Box>
                                                    <Typography sx={{ color: 'white', fontSize: '11px', fontFamily: 'monospace' }}>Total</Typography>
                                                    <Typography sx={{ color: '#649BA0', fontSize: '11px', fontFamily: 'monospace', ml: '7px' }}>/Person</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: '#21C3AC', fontFamily: 'monospace', fontSize: '21px', fontWeight: 'bold' }}>${totalAmtPerPerson}</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <Grid container sx={{ mt: '42px', mb: '45px' }}>
                                            <Grid item xs={12}>
                                                <Button sx={{ color: '#004849', bgcolor: '#9FE8DF', fontSize: '12px', fontWeight: 'bold', width: '100%', '&:hover': { bgcolor: '#9FE8DF', color: '#004849' } }} onClick={clearData}>Reset</Button>
                                            </Grid>

                                        </Grid>


                                    </Grid>

                                </Grid>

                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>


        </Grid>
    )
}

export default HomePage