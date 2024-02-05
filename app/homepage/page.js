'use client'
import { Box, Button, Grid,  Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';

const HomePage = () => {
    const [data,setData]=useState({billAmount:"",tipAmount:"",numOfPerson:"",totalTipPerPerson:"0.00",totalAmountPerPerson:"0.00"});
    


    const addTipAmount=(num)=>{
        setData({...data,tipAmount:Number(num)});
    }


    const handleReset=()=>{
        setData({...data,billAmount:'',tipAmount:0,numOfPerson:'',totalTipPerPerson:'0.00',totalAmountPerPerson:'0.00'});
        location.reload();
    }


    const handleCalculate =()=>{
        
        

        if(data.billAmount !=0 && data.tipAmount !=0 && data.numOfPerson != 0){
            

            const tip = (data.tipAmount/100)*data.billAmount;
            const tipPerson=tip/data.numOfPerson;
            const totalAmount = tip+data.billAmount;

            const amountPerson = totalAmount/data.numOfPerson

            // console.log("tip",tip)
            // console.log("amount",tipPerson)
            // console.log("totalAmount",totalAmount)
            // console.log("amountPerson",amountPerson)

            setData({...data,totalAmountPerPerson:amountPerson.toFixed(2),totalTipPerPerson:tipPerson.toFixed(2)});
        }
    }

    useEffect(()=>{
        handleCalculate();
    },[data])
    
    // console.log("data check",data)
  
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
                                    <input placeholder='0' type='number' style={{ display: 'block', backgroundColor: 'transparent', outline: 'none', textAlign: 'end', border: '3px solid transparent', color: '#00474B', fontWeight: 'bold' }} value={data.billAmount} onChange={(e)=>{setData({...data,billAmount:Number(e.target.value)})}}/>

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

                                        {/* custom input is also calculate like a percentage  */}
                                        <input placeholder='custom' type='number' style={{ display: 'block', backgroundColor: '#F3F8FB', outline: 'none', textAlign: 'end', border: '3px solid transparent', color: '#00474B', fontWeight: 'bold', width: '91%', p: '5px 8px' }} onChange={(e)=>{setData({...data,tipAmount:Number(e.target.value)})}}/>

                                    </Grid>

                                    <Grid item xs={12} sx={{ mt: '25px' }}>
                                        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                            <Typography sx={{ color: '#6B7777', fontSize: '11px', fontFamily: 'monospace', fontWeight: 'bold' }}>Number of People</Typography>
                                            <Typography sx={{ color: '#B48372', fontSize: '11px', fontFamily: 'monospace', fontWeight: 'bold',display:data.numOfPerson <=0 ? 'block':'none' }}>Can,t be zero</Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#F3F8FB', borderRadius: '4px', mt: '5px' }}>

                                            <PersonIcon sx={{ color: '#A9C3C6', pl: '3px', fontSize: '20px' }} />
                                            <input placeholder='0' type='number' style={{ display: 'block', backgroundColor: 'transparent', outline: 'none', textAlign: 'end', border: '3px solid transparent', color: '#00474B', fontWeight: 'bold' }} value={data.numOfPerson} onChange={(e)=>{setData({...data,numOfPerson:Number(e.target.value)})}}/>

                                        </Box>

                                    </Grid>
                                </Grid>

                            </Grid>

                            <Grid item lg={5.7} md={5.7} sm={10} xs={12} sx={{ bgcolor: '#00474B', borderRadius: '7px', mt: { lg: '0px', md: '0px', sm: '20px', xs: '20px' } }}>
                                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '30px' }}>
                                    <Grid item xs={10} >
                                        <Grid container>
                                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <Box>
                                                    <Typography sx={{ color: 'white', fontSize: '11px', fontFamily: 'monospace' }}>Tip Amount</Typography>
                                                    <Typography sx={{ color: '#649BA0', fontSize: '11px', fontFamily: 'monospace', ml: '3px' }}>/Person</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: '#21C3AC', fontFamily: 'monospace', fontSize: '21px', fontWeight: 'bold' }}>${data.totalTipPerPerson }</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pt: '50px' }}>
                                                <Box>
                                                    <Typography sx={{ color: 'white', fontSize: '11px', fontFamily: 'monospace' }}>Total</Typography>
                                                    <Typography sx={{ color: '#649BA0', fontSize: '11px', fontFamily: 'monospace', ml: '3px' }}>/Person</Typography>
                                                </Box>
                                                <Box>
                                                    <Typography sx={{ color: '#21C3AC', fontFamily: 'monospace', fontSize: '21px', fontWeight: 'bold' }}>${ data.totalAmountPerPerson}</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <Grid container sx={{ mt: '42px', mb: '45px' }}>
                                            <Grid item xs={12}>
                                                <Button sx={{ color: '#004849', bgcolor: '#9FE8DF', fontSize: '12px', fontWeight: 'bold', width: '100%', '&:hover': { bgcolor: '#9FE8DF', color: '#004849' } }} onClick={handleReset}>Reset</Button>
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