import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";
import { config } from "../config/config";
import prisma from "../config/prisma.config";

export const sendEmail = async (userId: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.EMAIL,
      pass: config.PASSWORD,
    },
  });

  try {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user || !user.id) {
      throw new Error("User or user ID is Not Found!");
    }
    const token = uuidv4();
    await prisma.oTP.create({
      data: {
        authorId: user.id,
        otp: token,
      },
    });

    const verificationLink = `${config.FRONTENDURL}/verify-email/${user.id}/?token=${token}`;
    if (!user) throw new Error("User not found");
    console.log(user.email);
    const mailOptions = {
      from: "bongbeast95@gmail.com",
      to: user.email,
      subject: "Please Verify Your Email Address",
      html: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Email Verification</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <body
    style="
      margin: 0;
      font-family: 'Poppins', sans-serif;
      background: #ffffff;
      font-size: 14px;
    "
  >
    <div
      style="
        max-width: 680px;
        margin: 0 auto;
        padding: 45px 30px 60px;
        background: #f4f7ff;
        background-image: url(https://pagedone.io/asset/uploads/1691055810.png);
        background-repeat: no-repeat;
        background-size: 800px 452px;
        background-position: top center;
        font-size: 14px;
        color: #434343;
      "
    >
      <header>
        <table style="width: 100%;">
          <tbody>
            <tr style="height: 0; ">
              <td>
                <img
                  alt=""
                  src="https://raw.githubusercontent.com/Bug-Bust3rs/UNITE/main/docs/Unite__Logo.png"
                  height="30px"
                />
              </td>
              <td style="text-align: right;">
                <span
                  style="font-size: 16px; line-height: 30px; color: #black;"
                  >${new Date().toLocaleDateString()}</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </header>

      <main>
        <div
          style="
            margin: 0;
            margin-top: 70px;
            padding: 92px 30px 115px;
            background: #ffffff;
            border-radius: 30px;
            text-align: center;
          "
        >
          <div style="width: 100%; max-width: 489px; margin: 0 auto;">
            <h1
              style="
                margin: 0;
                font-size: 24px;
                font-weight: 500;
                color: #1f1f1f;
              "
            >
              Verify Your Email
            </h1>
            <p
              style="
                margin: 0;
                margin-top: 17px;
                font-size: 16px;
                font-weight: 500;
              "
            >
              Dear <span style="font-weight: 600; color: #1f1f1f;">${user.name}</span>,
            </p>
            <p
              style="
                margin: 0;
                margin-top: 17px;
                font-weight: 500;
                letter-spacing: 0.56px;
              "
            >
              Thank you for registering with us. To complete your registration and activate your account, please verify your email address by clicking the button below:
            </p>
            <p style="margin: 40px 0;">
              <a
                href="${verificationLink}"
                style="
                  display: inline-block;
                  padding: 15px 25px;
                  font-size: 16px;
                  color: #ffffff;
                  background-color: #007bff;
                  border-radius: 5px;
                  text-decoration: none;
                "
              >
                Verify Email
              </a>
            </p>
            <p
              style="
                margin: 0;
                font-weight: 500;
                letter-spacing: 0.56px;
              "
            >
              This link will expire in
              <span style="font-weight: 600; color: #1f1f1f;">10 minutes</span>.
              If you did not request this verification, please disregard this email.
            </p>
          </div>
        </div>

        <p
          style="
            max-width: 400px;
            margin: 0 auto;
            margin-top: 90px;
            text-align: center;
            font-weight: 500;
            color: #8c8c8c;
          "
        >
          Need help? Contact us at
          <a
            href="mailto:/"
            style="color: #499fb6; text-decoration: none;"
            >/</a
          >
          or visit our
          <a
            href="/"
            target="_blank"
            style="color: #499fb6; text-decoration: none;"
            >Help Center</a
          >
        </p>
      </main>

      <footer
        style="
          width: 100%;
          max-width: 490px;
          margin: 20px auto 0;
          text-align: center;
          border-top: 1px solid #e6ebf1;
        "
      >
        <p
          style="
            margin: 0;
            margin-top: 40px;
            font-size: 16px;
            font-weight: 600;
            color: #434343;
          "
        >
          <td style="display:flex; justify-content:center ; align-items:center;">
                <h2 >
                UNITE
                </h2>
              </td>
        </p>
        <p style="margin: 0; margin-top: 8px; color: #434343;">
          1234 Street, City, State, Zip Code
        </p>
        <div style="margin: 0; margin-top: 16px;">
          <a href="https://www.facebook.com" target="_blank" style="display: inline-block;">
            <img
              width="36px"
              alt="Facebook"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661502815169_682499/email-template-icon-facebook"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            style="display: inline-block; margin-left: 8px;"
          >
            <img
              width="36px"
              alt="Instagram"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661504218208_684135/email-template-icon-instagram"
          /></a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            style="display: inline-block; margin-left: 8px;"
          >
            <img
              width="36px"
              alt="Twitter"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503043040_372004/email-template-icon-twitter"
            />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            style="display: inline-block; margin-left: 8px;"
          >
            <img
              width="36px"
              alt="Youtube"
              src="https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661503195931_210869/email-template-icon-youtube"
          /></a>
        </div>
        <p style="margin: 0; margin-top: 16px; color: #434343;">
          Copyright © 2025 Shuvadeep Mondal. All rights reserved.
        </p>
      </footer>
    </div>
  </body>
</html>
      `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};
