---
title: "The SolarWinds Hack: A Wake-Up Call for Software Supply Chain Security"
excerpt: "In December 2020, one of the largest cybersecurity breaches in history compromised thousands of organizations. Here's what happened, what we learned, and how companies can prevent it from happening again."
coverImage: "/assets/blog/cover-photos/solarwinds.png"
date: "2026-01-26"
author:
  name: Jennifer Good
  picture: "/assets/blog/authors/jen.png"
ogImage:
  url: "/assets/blog/cover-photos/solarwinds.png"
tags: ["supply-chain", "incident-response", "security-lessons"]
---

## The Day Everything Changed

It's a Tuesday morning in December 2020. You're a system administrator at a mid-sized financial services company. Your coffee is getting cold as you scroll through your email when you notice something unusual.

Your SolarWinds Orion platform, the network monitoring software you've relied on for years, just updated overnight. Nothing out of the ordinary, right? It does that all the time. But within hours, your security team starts noticing strange activity: unusual outbound connections from your Orion server to unfamiliar IP addresses. Traffic patterns that don't match any of your known systems. 

By lunch, you realize the truth: the software you trusted to monitor your network has been weaponized against you. The update you thought was routine contained malicious code. And you're not alone. 18,000 organizations worldwide are discovering the same thing simultaneously.

Welcome to the SolarWinds supply chain attack of 2020.

## What Actually Happened?

SolarWinds Orion is network management software used by thousands of organizations globally, including government agencies, Fortune 500 companies, and critical infrastructure providers. It's trusted software from a trusted vendor.

In March 2020, attackers (later attributed to a Russian state-sponsored group) compromised SolarWinds' build environment. They inserted malicious code into the legitimate Orion software updates. For months, this code sat dormant in the software, undetected by SolarWinds' own security measures and the companies using it.

When SolarWinds released updates between March and June 2020, they were inadvertently distributing a trojan horse to thousands of customers. The malware called SUNBURST established persistent remote access to infected networks, allowing attackers a backdoor to move laterally, steal data, and install additional tools.

The supply chain had been broken. And no one noticed for months.

## The First-Person Experience

If you were one of the thousands of IT professionals managing SolarWinds Orion, your experience went something like this:

You trusted SolarWinds. They're a reputable company. You applied security patches when they released them which is best practice, right? You monitored your network diligently. But the threat was coming from inside the trusted system.

When the breach was finally discovered in December 2020, the reaction was panic mixed with helplessness. You had done everything "right," and you were still compromised. The software you used to protect your network had become the vector for attack.

Worse, many organizations didn't realize they were compromised for weeks. Some, months. The malware was sophisticated. It slept, it checked in quietly, it blended in with normal traffic. It was designed to avoid detection.

## What Would You Do?

Let's imagine some scenarios. Consider what you would do in each situation:

### Scenario 1: You Discover the Compromise

**The situation:** Your security team identifies suspicious outbound traffic from your SolarWinds server in December 2020, just as news breaks about the exploit.

**What should you do?**
- Immediately isolate the affected Orion server from the network
- Assume breach- not just of the server, but potentially of data it had access to
- Begin forensics to determine: What data could attackers have accessed? How long have they been here? What other systems did they touch?
- Alert your incident response team, law enforcement, and affected customers/partners
- Don't assume you only have one problem. Sophisticated attackers typically establish multiple persistence mechanisms

**What some companies did instead:**
Some organizations delayed action, trying to understand the situation before reacting. Every hour of delay gave attackers more time to move laterally and establish deeper footholds.

### Scenario 2: The Patch Dilemma

**The situation:** SolarWinds releases a patch for the vulnerability. Your organization is debating: Do we apply it immediately? How do we know this patch is safe?

**What you should consider:**
- The patch is likely safe. SolarWinds and security firms have vetted it
- Waiting is riskier than patching, attackers are actively exploiting unpatched systems
- Apply the patch, but do so in a controlled manner
- First, isolate your SolarWinds server, apply the patch, forensically examine it, then carefully restore it
- Consider whether you even need SolarWinds anymore, can you replace it with something else entirely?

**What happened in reality:**
Many organizations were stuck in a trust paradox: SolarWinds was compromised, so how could we trust their patch? This hesitation left some vulnerable for weeks longer.

### Scenario 3: The Segmentation Question

**The situation:** After the attack, you're reviewing your network architecture. Your SolarWinds server had broad access to your network. Should it have?

**What the answer should be:**
No. Absolutely not.

A network monitoring tool needs visibility, but that doesn't mean it needs direct access to sensitive systems. Network segmentation could have limited the damage significantly. Even if attackers compromised Orion, they would have been restricted in where they could go.

## The Different Outcomes

Organizations experienced vastly different impacts based on their security posture:

**The Best Case (Minimal Damage):**
Organizations with strong network segmentation, who regularly monitored for anomalies, and who had detection systems in place caught the attack quickly. They isolated the server, contained the breach, and prevented lateral movement. Damage: Limited to forensics and remediation costs.

**The Middle Case (Significant Damage):**
Organizations that detected the breach but had already been compromised for weeks or months discovered that attackers had already moved laterally into email systems, Active Directory, and sensitive databases. Incident response costs skyrocketed. Forensics took months.

**The Worst Case (Catastrophic Damage):**
Critical infrastructure operators and government agencies, in some cases, didn't discover the breach for months. Attackers had unprecedented access to sensitive systems. The full scope of damage remains classified, but the impact was severe enough to be reported to the President.

The difference between these outcomes? Often came down to:
- Segmentation
- Monitoring
- Incident response readiness
- Trust assumptions (or lack thereof)

## What We've Learned

The SolarWinds attack exposed fundamental truths about cybersecurity that should have been obvious, but often weren't being practiced:

### 1. **Trust is Not a Security Control**

Trusting SolarWinds was reasonable, but it was being used as a replacement for actual security controls. Security isn't about who you trust, it's about what you verify.

**The lesson:** Apply the principle of "Zero Trust." Verify every connection. Monitor trusted software as closely as untrusted software. Assume breach.

### 2. **Supplier Security Matters as Much as Your Own**

SolarWinds' internal security practices weren't sufficient to prevent compromise. Their build environment was vulnerable. 

**The lesson:** When evaluating third-party software, ask hard questions about their security practices:
- How do they secure their development environment?
- What testing do they do before releasing updates?
- Do they have bug bounty programs?
- How responsive are they to security issues?
- What's their incident response plan?

### 3. **Network Segmentation Saves Lives**

The organizations that suffered least were those that didn't give their monitoring tools god-mode access to everything. Ironically, the tools designed to "see everything" should be the ones most restricted.

**The lesson:** Implement aggressive network segmentation. Your monitoring tool should have access to what it needs to monitor, nothing more.

### 4. **Logging and Monitoring Are Critical**

The organizations that detected the attack earliest were those with robust logging and anomaly detection. They could see the unusual outbound connections immediately because they had baselines.

**The lesson:** Log everything. Establish baselines for normal behavior. Invest in monitoring tools that can detect anomalies. Automate alerting.

### 5. **Patch Management Is Complicated**

The supply chain attack revealed a paradox: you need to patch to stay secure, but patches themselves can be a vector of attack.

**The lesson:** 
- Patch rapidly, but thoughtfully
- Test patches in isolated environments first
- Have a rollback plan
- Don't assume newer = safer
- Consider retiring or replacing critical vendor software periodically

**The lesson:** Security is shared responsibility. Your vendors secure their software, but you're responsible for detecting and responding to attacks in your environment.

## What Companies Can Do Better

In the years since SolarWinds, here's what should be prioritized:

### For Software Vendors

- **Secure Your Build Environment:** This is where the attack happened. Vendors should treat their build systems with the same security as customer-facing systems.
- **Code Signing:** Digitally sign code to ensure it hasn't been tampered with.
- **Software Bill of Materials (SBOM):** Publish clear documentation of what components are in your software.
- **Rapid Response:** When breaches are discovered, have a plan to notify customers quickly and provide patches immediately.
- **Bug Bounty Programs:** Incentivize security researchers to find vulnerabilities before attackers do.

### For Organizations Using Third-Party Software

- **Inventory Everything:** Know what software is running in your environment. Many organizations still don't have complete inventories of their SolarWinds deployments.
- **Network Segmentation:** Implement zero-trust architecture. Don't give third-party tools unnecessary access.
- **Monitor Third-Party Software:** Apply the same monitoring and alerting to vendor software as you do to your own systems.
- **Assess Vendor Security:** Before deploying software, assess the vendor's security practices.
- **Update Your Incident Response Plan:** Include scenarios for compromised third-party software.
- **Cyber Insurance:** Consider insurance that covers supply chain attacks.
- **Diversify Vendors:** Don't put all your eggs in one vendor's basket. If SolarWinds is breached, can you operate without it?

### For Security Teams

- **Assume Breach:** Stop assuming your defenses are perfect. Build your architecture assuming something will get compromised.
- **Detect Faster:** Invest in monitoring, analytics, and threat hunting. The faster you detect, the smaller the window of opportunity for attackers.
- **Respond Faster:** Have an incident response plan and practice it. SolarWinds showed us that when detection happens, response time matters enormously.
- **Educate Leadership:** Make sure executives understand that third-party security is as important as first-party security.

### For Everyone (Normal People)

- **Don't Trust = Don't Verify** Just because a company is reputable doesn't mean you should blindly update or trust them. Be cautious with automatic updates, especially on critical devices. Before updating something important (like your router, phone, or antivirus), check if there are any reported issues first.
- **Monitor Your Own "Network"** Notice unusual activity: unexpected programs running, strange network usage, devices acting weird. On your personal devices, periodically check what apps have permissions they shouldn't need. Use your phone's or computer's built-in activity monitors
- **Segmentation on a Personal Level** Don't use the same password across sites (like SolarWinds customers shouldn't have given one tool access to everything). Use different email addresses for different purposes (personal, shopping, banking). Don't give apps more permissions than they need
- **Have a Backup Plan** If your computer, phone, or critical software gets compromised, can you still function? Keep offline backups of important files. Know how to access your accounts if one device fails
- **Patch Carefully** Update software, but don't auto-update everything immediately. Give patches a few days to see if there are reported issues. Keep a device you can use while you're updating/testing another one
- **Know Your Supply Chain** Be aware that the security of services you use depends on their vendors too

## The Bottom Line

The SolarWinds attack was a watershed moment in cybersecurity. It proved that the biggest risks don't always come from the outside. Sometimes they come from within trusted systems.

But it also taught us that we're not helpless. Organizations with proper segmentation, monitoring, and incident response capabilities weathered the storm. Those without suffered tremendously.

The good news: SolarWinds happened nearly 6 years ago. Organizations have had time to implement lessons learned. The bad news: not all of them have.

If you're reading this and managing any critical third-party software or just your own finances and life:

- Make sure it's not given unnecessary network access
- Monitor it as closely as you'd monitor an unknown threat
- Have a backup plan if it becomes unavailable
- Test your incident response for this exact scenario
- Know what data flows through it

The SolarWinds attack was a failure of trust assumptions and architecture. But it was also a blueprint for how to do better. Learn from it. Don't wait for the next big breach to implement these lessons.

