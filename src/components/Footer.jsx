import { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useInView } from 'react-intersection-observer';
import { FaCloudDownloadAlt, FaSpinner } from "react-icons/fa";
import { Footer, Socials, Copyright } from "./styled-components/Footer.styled";
import { ButtonAlt, IconContainer } from './styled-components/Global.styled';
import { SocialLinks } from '../utils/Data';
import { fadeInRightVariant } from '../utils/Variants';
import { motion } from 'framer-motion';

const FooterC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const [showExportButton, setShowExportButton] = useState(false);
    const [isExporting, setIsExporting] = useState(false);

    useEffect(() => {
        if (!inView) return;

        const timer = setTimeout(() => {
            setShowExportButton(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, [inView]);

    const handleDownloadPortfolioPDF = async () => {
        if (isExporting) return;

        setIsExporting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            const element = document.getElementById('root');

            if (!element) {
                return;
            }

            const canvas = await html2canvas(element, {
                scale: window.devicePixelRatio > 2 ? 2 : window.devicePixelRatio,
                useCORS: true,
                logging: false,
            });

            const imgData = canvas.toDataURL('image/png');

            const pdf = new jsPDF('p', 'mm', 'a4');

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            const finalWidth = pdfWidth;
            const finalHeight = (canvas.height * pdfWidth) / canvas.width;

            let heightLeft = finalHeight;
            let position = 0;

            pdf.addImage(
                imgData,
                'PNG',
                0,
                position,
                finalWidth,
                finalHeight
            );

            heightLeft -= pdfHeight;

            while (heightLeft > 0) {
                position = heightLeft - finalHeight;

                pdf.addPage();

                pdf.addImage(
                    imgData,
                    'PNG',
                    0,
                    position,
                    finalWidth,
                    finalHeight
                );

                heightLeft -= pdfHeight;
            }

            pdf.save('Ibrahim_Dayoub_Software_Engineer_Portfolio.pdf');
        } catch (error) {
            console.error('PDF Export Error:', error);
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <Footer ref={ref}>
            <Socials>
                {SocialLinks.map(({ href, icon: Icon, label }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                    >
                        <Icon />
                    </a>
                ))}
            </Socials>

            <Copyright>
                © {new Date().getFullYear()} Ibrahim Dayoub | Code. Create. Inspire.
            </Copyright>

            {showExportButton && (
                <ButtonAlt
                    as={motion.button}
                    variants={fadeInRightVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.35 }}
                    onClick={handleDownloadPortfolioPDF}
                    disabled={isExporting}
                    style={{
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center',
                        cursor: isExporting ? 'not-allowed' : 'pointer',
                        opacity: isExporting ? 0.75 : 1,
                    }}
                    $responsivepadding2="0.5rem 1rem"
                >
                    <span>
                        {isExporting
                            ? 'Generating PDF'
                            : 'Export Portfolio'}
                    </span>

                    <IconContainer $color="blue" $size="1rem">
                        {isExporting ? (
                            <FaSpinner className="spin" />
                        ) : (
                            <FaCloudDownloadAlt />
                        )}
                    </IconContainer>
                </ButtonAlt>
            )}
        </Footer>
    );
};

export default FooterC;