import React from 'react';
import {Container, Table } from 'react-bootstrap';
import './Interview.css'
import code1 from './varletconstImages/code1.png'
import code2 from './varletconstImages/code2.png'
import code3 from './varletconstImages/code3.png'
import code4 from './varletconstImages/code4.png'
import code5 from './varletconstImages/code5.png'
import code6 from './varletconstImages/code6.png'
import code7 from './varletconstImages/code7.png'
import code8 from './varletconstImages/code8.png'
import code9 from './varletconstImages/code9.png'
import code10 from './varletconstImages/code10.png'
import code11 from './varletconstImages/code11.png'
import code12 from './varletconstImages/code12.png'
import code13 from './varletconstImages/code13.png'
import code14 from './varletconstImages/code14.png'
import code15 from './varletconstImages/code15.png'
import code16 from './varletconstImages/code16.png'
import code17 from './varletconstImages/code17.png'
import code18 from './varletconstImages/code18.png'
import code19 from './varletconstImages/code19.png'
import code20 from './varletconstImages/code20.png'
import code21 from './varletconstImages/code21.png'
import code22 from './varletconstImages/code22.png'
import code23 from './varletconstImages/code23.png'
import code24 from './varletconstImages/code24.png'
import code25 from './varletconstImages/code25.png'
import code26 from './varletconstImages/code26.png'
import code27 from './varletconstImages/code27.png'
import code28 from './varletconstImages/code28.png'
import code29 from './varletconstImages/code29.png'


const VarLetConst = () => {


    return (
        <div className='bg-color'>

            <h2 className="text-center">var vs let vs const</h2>

            <Container fluid>
<Table striped bordered hover>
    <thead>
        <tr>
            <th>KEYWORD</th>
            <th>REDECLARABLE</th>
            <th>REASSIGNABLE</th>
            <th>BLOCKSCOPE</th>
            <th>CREATES GLOBAL PROPERTY</th>
            <th>TDZ</th>

        </tr>
    </thead>
    <tbody>
        <tr>
            <td>var</td>
                <td>yes</td>
                <td>yes</td>
                <td>no</td>
                <td>yes</td>
                <td>no</td>
        </tr>
        <tr>
            <td>let</td>
            <td>no</td>
            <td>yes</td>
            <td>yes</td>
            <td>no</td>
            <td>yes</td>

        </tr>
        <tr>
            <td>const</td>
            <td>no</td>
            <td>no</td>
            <td>yes</td>
            <td>no</td>
            <td>yes</td>

        </tr>

    </tbody>
</Table>
</Container>
            <p className='description'>
                সংক্ষেপে যদি এই প্রশ্নের উত্তর দিতে বলা হয় তাহলে এভাবে বলতে পারি যে, <br /><br />
১। var রি-ডিক্লেয়ারেবল কিন্তু let ও const রি-ডিক্লেয়ারেবল না। <br />
২। var ও let কে রি-এস্যাইন করা যায় কিন্তু const কে করা যায় না।<br />
৩। var ব্লক স্কোপ ভ্যারিয়েবল না কিন্তু let ও const  ব্লক স্কোপ ভ্যারিয়েবল।<br />
৪। var গ্লোবাল প্রপার্টি তৈরি করে থাকে কিন্তু let ও const করে না। <br />
৫। var এর টেম্পোরাল ডেড জোন নেই কিন্তু let ও; const এর আছে।<br /><br/>

var, let ও const এই তিন ভাইয়ের মধ্যে মিল-অমিল সমূহ সম্পর্কে বিস্তারিত বুঝতে হলে আগে উপরের টেবিলে যে ৫টি হ্যাডার রয়েছে সেই সব বিষয় সম্পর্কে ভালোভাবে জানতে হবে। <br/> <br/>

<h2 className='text-center'>১। রি-ডিক্লেয়ারেবল</h2> <br/>

প্রথমে দেখে নেই ভ্যারিয়েবল ডিক্লেয়ার করার সিনটেক্সঃ

 <b>variable_Keyword  variable_Name;</b>

উদাহরণঃ

<img src={code1} alt="" /> <br/>

অর্থাৎ ভ্যারিয়েবল ডিক্লেয়ার বলতে বুঝায় যখন ভ্যারিয়েবলের প্রাথমিক কোনো মান বা ভ্যালু থাকে না। যার কারনে console.log করায় undefined দেখাচ্ছে। যখন ভ্যারিয়েবল ডিক্লেয়াররের সময় তার প্রাথমিক কোনো মান বা ভ্যালু দিয়ে দেওয়া হয় তাকে বলে ভ্যারিয়েবল ইনিশিয়ালাইজেশন। <br/>

ভ্যারিয়েবল ইনিশিয়ালাইজ করার সিনট্যাক্সঃ <br/>
<b>variable_Keyword  variable_Name = variable_Value;</b>

উদাহরণঃ <br/>

<img src={code2} alt="" /><br/>

এবার আসা যাক var, let ও const এর মধ্যে কারা রি-ডিক্লেয়ারেবল এবং কারা নয়। <br/><br/>

<h3>var রি-ডিক্লেয়ারেবলঃ </h3> <br/>

<b>var name;</b>

এখানে name নামের একটি ভ্যারিয়েবলকে var কী-ওয়ার্ড দ্বারা একবার ডিক্লেয়ার করা হয়েছে। আমরা চাইলে name নামের ভ্যারিয়েবলকে var কী-ওয়ার্ড দ্বারা বার বার ডিক্লেয়ার করতে পারি। তাতে কোনো  Uncaught SyntaxError: খেতে হবে না।
উদাহরণঃ <br/>

<img src={code3} alt="" /><br/>

<h3>let রি-ডিক্লেয়ারেবল নাঃ </h3>

let দিয়ে কোনো ভ্যারিয়েবল একবার ডিক্লেয়ার করে দিলে সিই নামে দ্বিতীয় বার let দিয়ে কোনো ভ্যারিয়েবল আর ডিক্লেয়ার করা যায় না। করলে Uncaught SyntaxError: খেতে হবে।
উদাহরণঃ

<img src={code4} alt="" /><br/>

<h3>const রি-ডিক্লেয়ারেবল নাঃ </h3>

const কে বলা হয় বাকী দুই জনের তুলনায় সবচেয়ে  বেশি স্ট্রিক্ট টাইপের লোক। const একবার কোনো কমিট্মেন্ট করে দিলে তারপর সে নিজেরও শোনে না। const এতটাই স্ট্রিক্ট যে তাকে দিয়ে কোনো ভ্যারিয়েবল শুধু ডিক্লেয়ার করলে সে শান্ত হবে না, সেই ভ্যারিয়েবল ডিক্লেয়ারের সাথে সাথে তাকে ইনিশিয়ালাইজও করতে হবে। যেমন আপনি যদি এভাবে লেখেনঃ

<img src={code5} alt="" /><br/>

এক্ষেত্রে আপনাকে ডিক্লেয়ারের সময় ইনিশিয়ালাইজ করতে হবে মানে ভ্যারিয়েবলের প্রাথমিক কোনো মান বা ভ্যালু দিয়ে দিতে হবে।
উদাহরণঃ

<img src={code6} alt="" /><br/>

যেহেতু const দিয়ে ইনিশিয়ালাইজেশন বাদে শুধু মাত্র ডিক্লেয়ারই করা যায় না সেই ক্ষেত্রে রি-ডিক্লেয়ারের তো প্রশ্নই আসে না।

<img src={code7} alt="" /><br/>


                <h2 className='text-center'>২। রি-অ্যাসাইনেবল  </h2><br/>

আমরা শুরুতেই ভ্যারিয়েবল ডিক্লেয়ার ও ইনিশিয়ালিজ কি জেনেছি। এবার জানবো ভ্যারিয়েবল অ্যাসাইন বলতে কি বোঝায়।
ভ্যারিয়েবল ইনিশিয়ালাইজেশনের সময় ভ্যারিয়েবলের একটি প্রাথমিক মান বা ভ্যালু দেওয়া হয়। ভ্যারিয়েবলের কোনো একটা মান বা ভ্যালু দেওয়া মানেই হচ্ছে সেই ভ্যারিয়েবলে কোনো কিছু অ্যাসাইন করা।
উদাহরণঃ<br/>

<img src={code8} alt="" /><br/>

উদাহরণটির মানে দাঁড়ায় “Superman” স্ট্রিং ভ্যালুটি name ভ্যারিয়েবলের মধ্যে অ্যাসাইন করা হয়েছে। আর রি-অ্যাসাইন মানে হচ্ছে আগে একটা ভ্যালু ভ্যারিয়েবলে অ্যাসাইন করার পর পরবর্তিতে আবার অন্য একটি ভ্যালু অ্যাসাইন করা।

উদাহরণঃ<br/>

<img src={code9} alt="" /><br/>

এভাবে রি-অ্যাসাইনেবল ভ্যারিয়েবলে আমরা বারবার ভ্যালু অ্যাসাইন করতে পারি। এবার আসি কারা কারা রি-অ্যাসাইনেবল এবং কারা নয়।

<h3> var রি-অ্যাসাইনেবলঃ </h3>

var কি-ওয়ার্ড দ্বারা ভ্যারিয়েবলকে যেমন যতবার ইচ্ছা ততবার ডিক্লেয়ার করা যায় ঠিক তেমনি একই নামের ভ্যারিয়েবলে যতবার ইচ্ছা ততবার ভ্যালু অ্যাসাইনও করা যায়। এইক্ষেত্রে সেই ভ্যারিয়েবল যদি সবার শেষে console.log করি তাহলে সর্বশেষ অ্যাসাইন করা মানটি আউটপুট হিসাবে পাবো।
উদাহরণঃ<br/>
<img src={code10} alt="" /><br/>

<h3>let রি-অ্যাসাইনেবলঃ </h3>

var এর মত  let রি-ডিক্লেয়ারেবল না হলেও let রি-অ্যাসাইনেবল।

উদাহরণঃ<br/>

<img src={code11} alt="" /><br/>

<h3>const রি-অ্যাসাইনেবল নাঃ </h3>

আগেই বলেছি const মামা এক্টু বেশিই স্ট্রিক্ট। তাকে না করা যায় শুধু ডিক্লেয়ার না করা যায় রি-অ্যাসাইন। প্রথম অবস্থায়ই তাকে ইনিশিয়ালাইজ করে দিতে হয়ে এবং তারপর আর সেই ভ্যারিয়েবলে হাত লাগানো যায় না।
উদাহরণঃ<br/>
<img src={code12} alt="" /><br/>

                <h2 className="text-center">৩। ব্লক স্কোপ </h2><br/>

ব্লক স্কোপ বোঝার আগে আমাদের বুঝতে হবে স্কোপ কি এবং স্কোপ এর প্রকারভেদ সমূহ।
একটি ভ্যারিয়েবলকে কতটুকু সীমান পর্যন্ত অ্যাক্সেস করা যায় তা নির্ধারণ করে থাকে স্কোপ। আরো সহজ ভাবে বলতে গেলে, আপনাকে যদি একটি রুমের মধ্যে তালা বদ্ধ অবস্থায় রাখা হয় তাহলে আপনি শুধু সেই রুমের মধ্যেই চলাচল করতে পারবেন। বাইরে থেকে আপনাকে কেউ চাইলেও অ্যাক্সেস করতে পারবে না। সহজ হিসাব।
কোনো প্রোগ্রামে ভ্যারিয়েবলের স্কোপ বলতে দুই ধরনের স্কোপকে বোঝানো হয়।<br/>

১। গ্লোবাল স্কোপ ও<br/>
২। লোকাল স্কোপ<br/>

 <h2 className="text-center">গ্লোবাল স্কোপঃ</h2><br/>

যখন কোনো ভ্যারিয়েবলকে কোনো ব্লকের বাইরে ডিক্লেয়ার করা হয় তখন সেই ভ্যারিয়েবলকে গ্লোবাল ভ্যারিয়েবল বলে এবং তার স্কোপ হয়ে যায় গ্লোবাল। তখন সেই ভ্যারিয়েবলকে একই ফাইলে থাকা যেকোনো জায়গা থেকেই অ্যাক্সেস করা যায়। ব্লক বলতে আমি বোঝাচ্ছি Function ব্লক, if…else ব্লক, switch…case ব্লক, loop statement ব্লক বা শুধু মাত্র কার্লি ব্র্যাকেট দ্বারা তৈরি একটি ব্লককে।  অর্থাৎ উল্লেখিত ব্লক সমূহের বাইরে কোনো ভ্যারিয়েবলকে ডিক্লেয়ার করলে সেটি গ্লোবাল স্কোপের মধ্যে পরে। তখন তাকে যে কেউই অ্যাক্সেস করতে পারে ও var বা let দ্বারা ডিক্লেয়ার করা হলে  তার মান বা ভ্যালু পরিবর্তন করার ক্ষমতাও রাখে।

<h3>Function এ গ্লোবাল ভ্যারিয়েবলঃ</h3>

উদাহরণঃ<br/>

<img src={code13} alt="" /><br/>

<h3>if…else এ গ্লোবাল ভ্যারিয়েবলঃ </h3>

<img src={code14} alt="" /><br/>

<h3>switch…case এ গ্লোবাল ভ্যারিয়েবলঃ </h3>

<img src={code15} alt="" /><br/>

<h3>loop এ গ্লোবাল ভ্যারিয়েবলঃ</h3>

<img src={code16} alt="" /><br/>

<h3>কার্লি ব্যাকেট দিয়ে তৈরি কোনো ব্লকে গ্লোবাল ভ্যারিয়েবলঃ</h3>

<img src={code17} alt="" /><br/>

অর্থাৎ গ্লোবাল ভ্যারিয়েবলকে যেকোনো জায়গা বা স্কোপ থেকেই অ্যাক্সেস করা যায়।

        <h2 className="text-center">লোকাল স্কোপঃ </h2>

আগের আলোচনা থেকে আমরা বুঝেছি যেকোনো ব্লকের বাইরে কোনো ভ্যারিয়েবলকে ডিক্লেয়ার করলে সেটি গ্লোবাল স্কোপ পেয়ে থাকে। যার কারনে সেই ভ্যারিয়েবলকে যেকোনো জায়গা থেকেই অ্যাক্সেস করা যায়।
লোকাল স্কোপ তার ঠিক উল্টো। যেকোনো ব্লকের মধ্যে কোনো ভ্যারিয়েবল ডিক্লেয়ার করে দিলেই সেটি হয়ে যাই সেটি হয়ে যায় সেই ব্লকের অন্তর্ভুক্ত লোকাল স্কোপ ভ্যারিয়েবল। ফলে তাকে আর বাইরে থেকে অ্যাক্সেস করা যায় না।

<h3>Function এ লোকাল ভ্যারিয়েবলঃ </h3>

উদাহরণঃ<br/>

<img src={code18} alt="" /><br/>

<h3>if…else এ গ্লোবাল ভ্যারিয়েবলঃ </h3>

<img src={code19} alt="" /><br/>

<h3>switch…case এ গ্লোবাল ভ্যারিয়েবলঃ </h3>

<img src={code20} alt="" /><br/>

<h3>loop এ গ্লোবাল ভ্যারিয়েবলঃ</h3>

<img src={code21} alt="" /><br/>

<h3>কার্লি ব্যাকেট দিয়ে তৈরি কোনো ব্লকে গ্লোবাল ভ্যারিয়েবলঃ </h3>

<img src={code22} alt="" /><br/>

অর্থাৎ লোকাল ভ্যারিয়েবলকে শুধু মাত্র তার নিজস্ব স্কোপ থেকেই অ্যাক্সেস করা যায়। এর বাইরে থেকে এক্সেস করতে চাইলে Uncaught ReferenceError খেতে হবে।

<b>নোটঃ</b> কোনো ভ্যারিয়েবল যদি কি-ওয়ার্ড দ্বারা ডিক্লেয়ার করা না হয় তখন তাকে বলে অটোমেটিকেলি গ্লোবাল ভ্যারিয়েবল। অটোমেটিকেলি গ্লোবাল ভ্যারিয়েবল যেকোনো ব্লকেই থাকোক না কেনো তাকে যে কেউই অ্যাক্সেস করতে পারবে।

উদাহরণঃ<br/>

<img src={code23} alt="" /><br/>

এবার আসি কারা কারা ব্লক স্কোপ বা লোকাল স্কোপ তৈরি করে এবং কারা করে না।

<h3>var ব্লক স্কোপ নাঃ</h3>

var কি-ওয়ার্ড দিয়ে যেখানেই ভ্যারিয়েবল ডিক্লেয়ার করা হোক না কেনো সেটি শুধু মাত্র ফাংশন বাদে অন্য সব ব্লকের ক্ষেত্রে সেটি  গ্লোবাল স্কোপ ভ্যারিয়েবল হয়ে যায়।

<h3>var if…else এ গ্লোবালঃ </h3>

<img src={code24} alt="" /><br/>

<h3>var switch…case এ গ্লোবালঃ </h3>

<img src={code25} alt="" /><br/>

<h3>var loop এ গ্লোবালঃ </h3>

<img src={code26} alt="" /><br/>

<h3>var শুধু মাত্র Funciton এ গ্লোবাল নাঃ</h3>

<img src={code27} alt="" /><br/>

<h3>let ব্লক স্কোপঃ </h3>

let কি-ওয়ার্ড দ্বারা যেকোনো স্কোপে ভ্যারিয়েবল ডিক্লেয়ার করলে সেটি ব্লক স্কোপ ভ্যারিয়েবল হয়ে যায়। ফলে ওই ব্লকের বাইরে সেই ভ্যারিয়েবলকে আর অ্যাক্সেস কর যায় না।
উপরে লোকাল স্কোপ উদাহরণ সমূহে আমরা তা দেখেছি।

<h3>const ব্লক স্কোপঃ</h3>

let এর মতো const ও ব্লক স্কোপ ভ্যারিয়েবল।

<h2 className="text-center">৪। গ্লোবাল প্রপার্টি তৈরি করা </h2>

ব্রাউজারে গ্লোবাল অব্জেক্ট বলতে আমরা বুঝি window অব্জেক্টকে। গ্লোবালি ডিক্লেয়ার করা যেকোনো ভ্যারিয়েবল বা ফাংশনই window নামক অব্জেক্টে জমা হয়। var যেহেতু গ্লোবাল স্কোপ ভ্যারিয়েবল তাই var  গ্লোবাল প্রপার্টিও তৈরি করে। কিন্তু let ও const গ্লোবাল স্কোপ ভ্যারিয়েবল না তাই তারা গ্লোবাল প্রপার্টিও তৈরি করে না।
var এর উদাহরণঃ <br/>

<img src={code28} alt="" /><br/>

let ও const এর উদাহরণঃ

<img src={code29} alt="" /><br/>

                <h2 className="text-center">৫। টেম্পরাল ডেড জোন (TDZ)</h2><br/>

টেম্পরাল ডেড জোন বলতে যেকোনো ভ্যারিয়েবলের স্কোপকেই বোঝায়। অর্থাৎ একটা ভ্যারিয়েবলকে কোথায় অ্যাক্সেস করা যাবে এবং কোথায় যাবে না তা বোঝায়।
var দ্বারা ডিক্লেয়ার করা ভ্যারিয়েবলের টেম্পরাল ডেড জোন শুধু মাত্র ফাংশনের ক্ষেত্রেই আছে। আর অন্য কোনো ক্ষেত্রে var এর টেম্পরাল ডেড জোন বলতে কিছু নেই।
অন্য দিকে let আর const দ্বারা ডিক্লেয়ার করা ভ্যারিয়েল এর টেম্পরাল ডেড জোন যেই ব্লকে ডিক্লেয়ার করা হয়েছে সেই ব্লকের মধ্যেই সীমাবদ্ধ।

</p>
        </div>
    );
};

export default VarLetConst;