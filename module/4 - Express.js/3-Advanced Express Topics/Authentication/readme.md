# 🔐 Authentication Types

Authentication is the process of verifying the identity of a user or system.

There are **7 main types of Authentication** commonly used in web and software applications.

---

## 1️⃣ Password-Based Authentication

**Description**
- User logs in using a username/email and password.

**Example**
- Gmail login
- Facebook login

**Pros**
- Easy to implement
- Widely used

**Cons**
- Weak if password is stolen
- Requires strong password rules

---

## 2️⃣ Token-Based Authentication (JWT)

**Description**
- Server generates a token after login.
- Client sends the token with each request.

**Example**
- JWT (JSON Web Token)
- Bearer Token

**Pros**
- Stateless
- Best for APIs and SPA apps (Angular, React)

**Cons**
- Token theft risk
- Logout is difficult until token expires

---

## 3️⃣ Session-Based Authentication

**Description**
- Server creates a session.
- Session ID stored in browser cookies.

**Example**
- Traditional web applications

**Pros**
- Secure
- Easy logout

**Cons**
- Server memory usage
- Not scalable

---

## 4️⃣ Multi-Factor Authentication (MFA / 2FA)

**Description**
- Uses more than one authentication factor.

**Example**
- Password + OTP
- Password + Authenticator App

**Pros**
- Very secure
- Reduces hacking risk

**Cons**
- Extra step for users

---

## 5️⃣ Biometric Authentication

**Description**
- Uses physical characteristics.

**Example**
- Fingerprint
- Face ID
- Retina scan

**Pros**
- High security
- Fast login

**Cons**
- Needs special hardware

---

## 6️⃣ Certificate-Based Authentication

**Description**
- Uses digital certificates to authenticate users or systems.

**Example**
- Client SSL certificates
- Enterprise systems

**Pros**
- Very secure
- No passwords required

**Cons**
- Complex setup
- Not user-friendly

---

## 7️⃣ OAuth / Social Authentication

**Description**
- Login using third-party providers.

**Example**
- Google Login
- Facebook Login
- GitHub Login

**Pros**
- No password needed
- Fast login

**Cons**
- Depends on third-party service

---

## 📊 Authentication Types Summary

| Type | Example |
|-----|--------|
| Password | Email & Password |
| Token | JWT |
| Session | Cookies |
| MFA | OTP |
| Biometric | Fingerprint |
| Certificate | SSL Cert |
| OAuth | Google Login |

---

## ✅ Conclusion

👉 There are **7 main types of Authentication** used in modern applications.

Choose the authentication method based on:
- Application type
- Security needs
- Scalability

---
