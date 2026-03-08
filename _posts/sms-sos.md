---
title: "SMS SOS"
excerpt: "SIM swapping, number recycling, and why texted one time passcodes (OTP) aren't as secure as you think."
coverImage: "/assets/blog/cover-photos/sms-sos.png"
date: "2026-03-07"
author:
  name: Jennifer Good
  picture: "/assets/blog/authors/jen.png"
ogImage:
  url: "/assets/blog/cover-photos/sms-sos.png"
tags: ["security", "two-factor", "privacy", "authentication"]
---

## Phone Numbers: The Weak Link You Didn’t Know About

Most of us treat our mobile phone number like a part of our personal identity, something that is *ours* forever. It shows up on forms, it’s your fallback for account recovery, and countless services send a 'security code' via SMS when you try to sign in.

But phone numbers are not stable IDs. They are recycled and they can be stolen. An attacker who controls your number can reset passwords, hijack bank accounts, and lock you out of your own digital life. Let’s look at how.

### SIM Swapping (A.K.A. SIM Jacking)

SIM swapping is when a scammer convinces your mobile carrier to transfer your number to a SIM card they control. Once they do, they receive every call and text destined for your number, including verification codes.

How the attack typically works:

1. **Gather personal info** – via phishing, data breaches, or social media. Names, birthdates, addresses, and the last four of a Social Security number are often enough.
2. **Call or visit the carrier** – the attacker impersonates you and claims the phone has been lost or damaged. They request a new SIM or port the number to another carrier.
3. **Bypass weak security** – many carriers rely on easily guessed account numbers or mothers’ maiden names. Social engineering here is the key.
4. **Receive codes** – with the number forwarded, SMS-based 2FA codes, password resets, and account notifications go straight to the attacker.

### Number Recycling

Even if no one is actively targeting you, your old phone number may still be a liability. Carriers eventually free up numbers and give them to new customers. If you signed up for services using that number and later abandoned it, the new owner can receive all of the same messages.

- Banks, social networks, and other sites might still allow password resets via SMS.
- Texted delivery codes and two-factor auth messages will go to the wrong person.
- If the new owner is malicious (or their account gets compromised), they can impersonate you.

### Why "Text Me a Code" Is Weaker Than You Think

SMS as a two-factor authentication (2FA) method is convenient, which is why it's been all over the place. Frequently it is referred to as a one time passcode that expires quickly. However, a short time from won't matter if someone has taken over your number. It has systemic weaknesses:

- **Interceptable**: Codes travel over the mobile network unencrypted and can be intercepted by malware, SS7 attacks, or by a rogue telecom employee.
- **Social engineering target**: The attack described above shows that SMS relies on the carrier’s security, not yours.
- **Number porting abuse**: Even if you keep your SIM safe, attackers can hijack your number by porting it away without ever touching your device.

Because SMS 2FA ties security to a phone number, any compromise of that number affects every service that uses it.

> 
> **Note:**  The National Institute of Standards and Technology (NIST) officially deprecated SMS-based 2FA in 2017 for high-security applications.

## Protecting Yourself and Your Accounts

Here are steps you can take to reduce the risk:

- **Use app-based or hardware 2FA** (e.g., Authy, Google Authenticator, or a YubiKey) whenever possible. These methods are tied to something you *have*, not a number you *share*. Even setting your email instead of phone number is a better option because someone can't request to have your email ported over.
- **Add a PIN or password to your mobile account** if your carrier offers one, and ask about fraud detection policies.
- **Be cautious about giving out your number**. Treat it like any other piece of personal information.
- **Audit services**: Check which sites have your number on file and see if you can switch to other recovery methods.
- **Monitor for unexpected porting**: Some carriers allow you to lock the number to the network; others have opt-in porting alerts.
- **Keep an eye on credit reports** and SIM swap add-ons such as carriers’ “extra security” features.

If you become a victim of SIM swapping:

1. Contact your mobile carrier immediately to regain control of your number.
2. Change passwords on important accounts and remove the phone number from recovery options.
3. Consider freezing your credit and alerting banks.
4. Report the incident to the FCC and local law enforcement.

## The Bigger Picture

Phone numbers were never designed as secure identifiers. They were invented for routing calls, not for verifying identities. As our lives move increasingly online, relying on a tiny piece of infrastructure that can be reassigned and manipulated is a recipe for compromise.

The easiest, most effective way to reduce your exposure is to stop using SMS as your second factor. Whenever you see "text me a code," think instead about stronger methods and question whether the number really needs to be part of your digital identity.

---

## References

1. Krebs on Security – ["SIM Swapping: The $5,000 iPhone Scam" (2019)](https://krebsonsecurity.com/2019/04/sim-swapping-the-5000-iphone-scam/)
2. NIST Special Publication 800-63B – [Digital Identity Guidelines: Authentication and Lifecycle Management](https://pages.nist.gov/800-63-3/sp800-63b.html)
3. Federal Communications Commission (FCC) – [SIM swap fraud consumer alert](https://www.fcc.gov/consumers/guides/consumer-alert-sim-swap-fraud)
4. The New York Times – ["The Hackers Who Broke Into My Phone" (2023)](https://www.nytimes.com/2023/01/15/technology/sim-swap-hacking-phones.html)
5. U.S. Department of Justice – [Indictments related to SIM swap schemes](https://www.justice.gov/opa/pr/six-persians-indicted-massive-sim-swapping-plot-broke-into-social-media)
