# Security Policy

## Supported Versions

We actively provide security updates for the following versions of **softhelper**:

| Version | Supported          |
| ------- | ------------------ |
| Main    | :white_check_mark: |
| < 1.0.0 | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability within this project, please **do not open a public issue**. Instead, follow the steps below to report it responsibly:

### 1. Private Reporting
The preferred method is to use the **GitHub Security Advisory** feature. You can do this by navigating to the "Security" tab of this repository and selecting "Report a vulnerability".

### 2. Required Information
To help us resolve the issue quickly, please include:
* A description of the vulnerability.
* Step-by-step instructions to reproduce the issue (Proof of Concept).
* The potential impact (e.g., unauthorized file access, system instability).

## Our Response Process
* **Acknowledgment:** You will receive a response within **48 hours**.
* **Triage:** We will verify the vulnerability and determine its severity.
* **Fix:** A patch will be developed and tested.
* **Disclosure:** Once the fix is merged into the `main` branch, a security advisory will be published to inform all users.

## Best Practices for Users
Since this repository contains scripts that may interact with your operating system:
* **Review Before Execution:** Always inspect the source code before running scripts with `sudo` or administrator privileges.
* **Minimal Permissions:** Run the helper scripts with the minimum required permissions to perform the task.
* **Keep Updated:** Regularly pull the latest changes from the `main` branch to ensure you have the latest security patches.

---
*Thank you for helping keep this project and its users safe!*
