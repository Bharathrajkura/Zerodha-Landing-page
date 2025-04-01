<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zerodha | Landing Page</title>
    <style>
        /* Responsive Design */
        @media (max-width: 1024px) {
            div[style*="padding-left: 70px"] {
                padding-left: 40px !important;
                padding-right: 40px !important;
            }
            div[style*="width: 1000px"] {
                width: 90% !important;
            }
        }

        @media (max-width: 768px) {
            div[style*="display: flex; justify-content: space-between"] {
                flex-direction: column;
                align-items: center;
                text-align: center;
                padding-left: 20px !important;
                padding-right: 20px !important;
            }
            div[style*="display: flex;"] {
                flex-direction: column;
                align-items: center;
            }
            div[style*="padding: 20px;"] {
                padding: 10px !important;
            }
            div[style*="width: 1000px"] {
                width: 95% !important;
            }
            h1 {
                font-size: 24px !important;
                text-align: center;
            }
            h3 {
                font-size: 18px !important;
                text-align: center;
                padding: 0 15px;
            }
            div[style*="padding-top: 40px;"] {
                padding-top: 20px !important;
            }
            div[style*="padding-top: 10px; padding-bottom: 10px;"] {
                font-size: 18px !important;
                padding: 8px 20px !important;
            }
        }

        @media (max-width: 480px) {
            div[style*="width: 1000px"] {
                width: 100% !important;
            }
            h1 {
                font-size: 20px !important;
            }
            h3 {
                font-size: 16px !important;
            }
            div[style*="padding-top: 10px; padding-bottom: 10px;"] {
                font-size: 16px !important;
                padding: 6px 15px !important;
            }
        }
    </style>
</head>
<body>

<div style="display: flex; justify-content: space-between; padding-left: 70px; padding-right: 70px; box-shadow: 2px 0px 2px #eeee;">
    <img width="150" height="27px" src="logo.svg" alt="zerodha" style="padding-top: 10px;">
    <div style="display: flex;">
        <div style="padding: 20px;">Signup</div>
        <div style="padding: 20px;">About</div>
        <div style="padding: 20px;">Products</div>
        <div style="padding: 20px;">Pricing</div>
        <div style="padding: 20px;">Support</div>
    </div>
</div>

<br><br><br><br>

<div style="display: flex; justify-content: center; padding-top: 20px;">
    <img src="landing.png" alt="image" width="1000px">
</div>

<div style="padding-top: 40px; display: flex; justify-content: center;">
    <h1 style="font-weight: 500;">Invest in everything</h1>
</div>

<div style="padding-top: 40px; display: flex; justify-content: center;">
    <h3 style="font-weight: 300;">Online platform to invest in stocks, derivatives, mutual funds, and more.</h3>
</div>

<div style="display:flex; justify-content: center; padding-top: 40px;">
    <div style="background-color: #387ed1; padding-top: 10px; padding-bottom: 10px; padding-left: 30px; padding-right: 30px; border-radius: 2px; font-size: 20px; cursor: pointer; color: whitesmoke; font-weight: 300;">
        Sign up now
    </div>
</div>

</body>
</html>
