import React from 'react';
import {
    Box, chakra, Heading,
    Text
  } from "@chakra-ui/react";
import FAQRow from "../../components/faq/faqrow";
import faqarrow from "../../static/assets/images/faqarrow.svg";
import Layout from "../../modules/layout/layout";
import "../../styles/faq/faq.css";
import UserSide from './userside';

export default function FaqHelp() {
    const data = [
        {
            img: faqarrow,
          question: " How to buy a ticket in Portalys?",
          answer:
            "Hi! This is our friendly guide to buying a ticket in Portalys. If you do not have a Wallet that supports Solana, have never used crypto, or have no clue about what it means. This article is for you.To buy tickets that are secure, reliable, and traceable and have full control of them you must have a place to store them because this is not the same as storing those unuseful and not secure PDFs. Therefore the first step is to create a Wallet to store your tickets. Just like any other platforms you create your account with basic credentials, but here the trick is that your wallet is created simultaneously to your account. Removing the hassle and accelerating adoption in the Web3 world and a reimagined event ticketing era. With your Portalys wallet, you can transfer funds from other wallets that you may have, like Phantom, MetaMask, Ledger or simply you fund your wallet with any FIAT currency. If you do not want to buy a ticket in this fashion, you could also just pay with a credit card at the ticket checkout. There will be a button to select this option, and you will not have to pay in crypto.",
        },
        {
            img: faqarrow,
          question: "How do I create a Portalys account?",
          answer:
            "Hi! This is our friendly guide to buying a ticket in Portalys. If you do not have a Wallet that supports Solana, have never used crypto, or have no clue about what it means. This article is for you.To buy tickets that are secure, reliable, and traceable and have full control of them you must have a place to store them because this is not the same as storing those unuseful and not secure PDFs. Therefore the first step is to create a Wallet to store your tickets. Just like any other platforms you create your account with basic credentials, but here the trick is that your wallet is created simultaneously to your account. Removing the hassle and accelerating adoption in the Web3 world and a reimagined event ticketing era. With your Portalys wallet, you can transfer funds from other wallets that you may have, like Phantom, MetaMask, Ledger or simply you fund your wallet with any FIAT currency. If you do not want to buy a ticket in this fashion, you could also just pay with a credit card at the ticket checkout. There will be a button to select this option, and you will not have to pay in crypto.",
        },
        {
            img: faqarrow,
          question: "How do I fund my wallet with Solana?",
          answer:
            "Hi! This is our friendly guide to buying a ticket in Portalys. If you do not have a Wallet that supports Solana, have never used crypto, or have no clue about what it means. This article is for you.To buy tickets that are secure, reliable, and traceable and have full control of them you must have a place to store them because this is not the same as storing those unuseful and not secure PDFs. Therefore the first step is to create a Wallet to store your tickets. Just like any other platforms you create your account with basic credentials, but here the trick is that your wallet is created simultaneously to your account. Removing the hassle and accelerating adoption in the Web3 world and a reimagined event ticketing era. With your Portalys wallet, you can transfer funds from other wallets that you may have, like Phantom, MetaMask, Ledger or simply you fund your wallet with any FIAT currency. If you do not want to buy a ticket in this fashion, you could also just pay with a credit card at the ticket checkout. There will be a button to select this option, and you will not have to pay in crypto.",
        },
        {
            img: faqarrow,
          question: "How do I keep my wallet safe?",
          answer:
            "Hi! This is our friendly guide to buying a ticket in Portalys. If you do not have a Wallet that supports Solana, have never used crypto, or have no clue about what it means. This article is for you.To buy tickets that are secure, reliable, and traceable and have full control of them you must have a place to store them because this is not the same as storing those unuseful and not secure PDFs. Therefore the first step is to create a Wallet to store your tickets. Just like any other platforms you create your account with basic credentials, but here the trick is that your wallet is created simultaneously to your account. Removing the hassle and accelerating adoption in the Web3 world and a reimagined event ticketing era. With your Portalys wallet, you can transfer funds from other wallets that you may have, like Phantom, MetaMask, Ledger or simply you fund your wallet with any FIAT currency. If you do not want to buy a ticket in this fashion, you could also just pay with a credit card at the ticket checkout. There will be a button to select this option, and you will not have to pay in crypto.",
        },
        {
            img: faqarrow,
          question: "How can I report fraudulent behavior/content on Portalys?",
          answer:
            "Hi! This is our friendly guide to buying a ticket in Portalys. If you do not have a Wallet that supports Solana, have never used crypto, or have no clue about what it means. This article is for you.To buy tickets that are secure, reliable, and traceable and have full control of them you must have a place to store them because this is not the same as storing those unuseful and not secure PDFs. Therefore the first step is to create a Wallet to store your tickets. Just like any other platforms you create your account with basic credentials, but here the trick is that your wallet is created simultaneously to your account. Removing the hassle and accelerating adoption in the Web3 world and a reimagined event ticketing era. With your Portalys wallet, you can transfer funds from other wallets that you may have, like Phantom, MetaMask, Ledger or simply you fund your wallet with any FIAT currency. If you do not want to buy a ticket in this fashion, you could also just pay with a credit card at the ticket checkout. There will be a button to select this option, and you will not have to pay in crypto.",
        },
        {
            img: faqarrow,
          question: "What blockchain does Portalys support?",
          answer:
            "Hi! This is our friendly guide to buying a ticket in Portalys. If you do not have a Wallet that supports Solana, have never used crypto, or have no clue about what it means. This article is for you.To buy tickets that are secure, reliable, and traceable and have full control of them you must have a place to store them because this is not the same as storing those unuseful and not secure PDFs. Therefore the first step is to create a Wallet to store your tickets. Just like any other platforms you create your account with basic credentials, but here the trick is that your wallet is created simultaneously to your account. Removing the hassle and accelerating adoption in the Web3 world and a reimagined event ticketing era. With your Portalys wallet, you can transfer funds from other wallets that you may have, like Phantom, MetaMask, Ledger or simply you fund your wallet with any FIAT currency. If you do not want to buy a ticket in this fashion, you could also just pay with a credit card at the ticket checkout. There will be a button to select this option, and you will not have to pay in crypto.",
        },
        {
            img: faqarrow,
          question: "How do I fund my wallet with Solana?",
          answer:
            "Hi! This is our friendly guide to buying a ticket in Portalys. If you do not have a Wallet that supports Solana, have never used crypto, or have no clue about what it means. This article is for you.To buy tickets that are secure, reliable, and traceable and have full control of them you must have a place to store them because this is not the same as storing those unuseful and not secure PDFs. Therefore the first step is to create a Wallet to store your tickets. Just like any other platforms you create your account with basic credentials, but here the trick is that your wallet is created simultaneously to your account. Removing the hassle and accelerating adoption in the Web3 world and a reimagined event ticketing era. With your Portalys wallet, you can transfer funds from other wallets that you may have, like Phantom, MetaMask, Ledger or simply you fund your wallet with any FIAT currency. If you do not want to buy a ticket in this fashion, you could also just pay with a credit card at the ticket checkout. There will be a button to select this option, and you will not have to pay in crypto.",
        },
        {
            img: faqarrow,
          question: "Solana could become the ‘Visa of crypto’: Bank of America",
          answer:
            "Hi! This is our friendly guide to buying a ticket in Portalys. If you do not have a Wallet that supports Solana, have never used crypto, or have no clue about what it means. This article is for you.To buy tickets that are secure, reliable, and traceable and have full control of them you must have a place to store them because this is not the same as storing those unuseful and not secure PDFs. Therefore the first step is to create a Wallet to store your tickets. Just like any other platforms you create your account with basic credentials, but here the trick is that your wallet is created simultaneously to your account. Removing the hassle and accelerating adoption in the Web3 world and a reimagined event ticketing era. With your Portalys wallet, you can transfer funds from other wallets that you may have, like Phantom, MetaMask, Ledger or simply you fund your wallet with any FIAT currency. If you do not want to buy a ticket in this fashion, you could also just pay with a credit card at the ticket checkout. There will be a button to select this option, and you will not have to pay in crypto.",
        },
      ];
  return (
    <Layout>
    <Box padding="70px 0px">

      <Box className="faqplannerhero">
          <Heading
            backgroundColor="#000000"
            fontSize="40px"
            fontWeight="800"
            color="#FFFFFF"
            textAlign="center"
            className="faqheader"
          >
            Frequently Asked Questions
          </Heading>
          <Box marginTop="60px">
            {data.map((item, index) => {
              return (
                <Box key={index} marginTop="20px">
                  <FAQRow faqarrow={item.img} question={item.question} answer={item.answer} />
                </Box>
              );
            })}
          </Box>
        </Box>
    </Box>
  </Layout>
  )
}
