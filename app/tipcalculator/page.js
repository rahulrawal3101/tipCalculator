'use client'
import React, { useState } from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';

const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState('');
  const [numPeople, setNumPeople] = useState(1);
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
  const [totalAmountPerPerson, setTotalAmountPerPerson] = useState(0);
  const [customTipAmount, setCustomTipAmount] = useState('');

  const calculateTip = (tipValue) => {
    const bill = parseFloat(billAmount);
   
  
    
     let tip = bill * (tipValue / 100);
    
    const total = bill + tip;
    const tipPerPerson = tip / numPeople;
    const totalPerPerson = total / numPeople;

    setTipAmountPerPerson(tipPerPerson.toFixed(2));
    setTotalAmountPerPerson(totalPerPerson.toFixed(2));
  };

  const handleCustomTipChange = (e) => {
    setCustomTipAmount(e.target.value);
    calculateTip(parseFloat(e.target.value)); // Call calculateTip with the custom tip amount
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Tip Calculator
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Bill Amount" variant="outlined" fullWidth value={billAmount} onChange={(e) => setBillAmount(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="primary" onClick={() => calculateTip(0)} > No Tip</Button>
          {[5, 10, 15, 20].map((percentage) => (
            <Button key={percentage} variant="contained" color="primary" onClick={() => calculateTip(percentage)}
            >
              {percentage}%
            </Button>
          ))}
          <TextField label="Custom Tip Amount" variant="outlined" type="number" fullWidth value={customTipAmount} onChange={handleCustomTipChange}/>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Number of People" variant="outlined" type="number" fullWidth value={numPeople} onChange={(e) => setNumPeople(parseInt(e.target.value))}/>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Tip Amount Per Person: ${tipAmountPerPerson}
          </Typography>
          <Typography variant="h6" gutterBottom>
            Total Amount Per Person: ${totalAmountPerPerson}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default TipCalculator;
