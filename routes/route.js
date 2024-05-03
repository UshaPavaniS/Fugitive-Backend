// routes.js

const express = require('express');
const router = express.Router();
const fugitiveService = require('../services/fugitive-service');

router.post('/check-capture-status', (req, res) => {
    const fugitiveCity = fugitiveService.selectFugitiveCity();
    const copData = req.body;
    let capturedBy = null;
    let capturedByCop = null;

    for (let i = 0; i < copData.length; i++) {
      capturedBy = fugitiveService.simulateCapture(copData[i].cityName, copData[i].vehicleName);
      if (capturedBy) {
        capturedByCop = copData[i].copNumber;
        break;
      }
    }
    res.json({ capturedByCop });
  });

module.exports = router;
