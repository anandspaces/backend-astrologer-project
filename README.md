# Astrologer Flow Distribution Backend

This project implements a flow distribution algorithm in Node.js to connect users with astrologers. The system ensures a fair and balanced allocation of users to astrologers, while providing flexibility to adjust the flow for top astrologers.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Overview

This backend system manages the flow distribution of users to astrologers. It aims to:
- Fairly distribute users among astrologers.
- Provide an option to adjust the flow for top astrologers based on user preferences.
- Handle a daily flow of 2000-3000 users and a pool of 500 astrologers efficiently.
  
## Features

- **Fair Flow Distribution**: Distributes users among astrologers evenly by default.
- **Top Astrologer Adjustment**: Allows adjusting the flow for top astrologers by toggling their flow multiplier.
- **API Endpoints**: Allows interaction with the system via RESTful API endpoints.
- **Scalable**: Designed to scale efficiently with a large number of users and astrologers.
- **Performance Optimized**: Built to handle high user traffic while maintaining low latency.

## Technologies

- **Node.js**: JavaScript runtime for building the backend logic.
- **Express.js**: Web framework for creating RESTful API endpoints.
- **Mocha**: JavaScript test framework for unit testing.
- **Chai**: Assertion library for testing.
