import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import backgroundImg from '../assets/umass_fall.jpeg'
import first_cover from '../assets/1870_Cover.png'
import last_cover from '../assets/2005_Cover.png'


export default function History() {
    return (
        <div className="history-box">
            <div className="intro">
                <h1>A Brief History of the Index</h1>
                <br />
                <h5 style={{}}>
                    For 135 of the 157 years that comprise the history of the University of Massachusetts, students
                    published a yearbook documenting their four yearsat the institution. This book was titled The Index.
                </h5>
            </div>
            <div>
                <div>
                    <Image src={first_cover} alt="The first edition of the Index (1870)"/>
                    <p>The first edition of the Index (1870)</p>
                </div>
                <div>
                    <blockquote>
                    "At the end of each year, the students of Massachusetts
                    Agricultural College and its successor institutions issued a
                    yearbook known as the Index, documenting their time at school.
                    For most of the first half century of the school, the Index was
                    compiled by members of the junior class and contained
                    “communications” from each class along with complete lists of
                    students and student organizations, faculty, and officers of the
                    college, along with occasionally humorous (and occasionally-
                    humorous) vignettes of life on campus. The Index was only one of
                    a trio of books that students kept during the nineteenth century to
                    remember their times of campus, along with “M Books”
                    (personalized scrapbooks) and class-issued photographic albums
                    containing images of classmates, faculty, and campus."
                    </blockquote>
                </div>
            </div>
            <div>
                <div>
                    <Image src={last_cover} alt="The last edition of the Index in recent memory (2005)"/>
                    <p>The last edition of the Index in recent memory (2005)</p>
                </div>
                <div>
                    <blockquote>
                        "In its earliest years, the Index had few illustrations. Before 1882,
                        each number contained only a handful of comic drawings or line
                        drawings of scenes on campus, and for several years after that
                        date, the volumes were issued with only a single photographic
                        frontispiece. By the turn of the century, however, photographs
                        began to proliferate in the Index (eventually replacing the class
                        photograph albums altogether). Beginning with images of the
                        faculty, class portraits, and images of sports teams and campus
                        views, the yearbook expanded by 1912 to include photographs of
                        each member of the junior class, and eventually, the senior class
                        as well. The Index ceased publication in 2005."
                    <Button type="submit" href="http://scua.library.umass.edu/youmass/doku.php?id=yearbooks" className="button" variant="outline-light" style={{color: "maroon"}}>See More Editions!</Button>
                    </blockquote>
                </div>
            </div>
        </div>
        
    )

}