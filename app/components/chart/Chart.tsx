'use client';
import { SetStateAction, useState } from 'react';
import styles from './Chart.module.scss';

const Chart = () => {
  const [show, setShow] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState('Weekly');

  const handleDurationSelect = (value: SetStateAction<string>) => {
    setSelectedDuration(value);
    setShow(false);
  };

  return (
    <section className={styles.chart_container}>
      <div className={styles.top}>
        <h3>Sales Trends</h3>
        <div className={styles.sort}>
          <h4>Sort by:</h4>
          <div className={styles.duration}>
            <h6 onClick={() => setShow((prevState) => !prevState)}>
              {selectedDuration}
            </h6>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='21'
              viewBox='0 0 20 21'
              fill='none'
              onClick={() => setShow((prevState) => !prevState)}
            >
              <path
                d='M3.72456 7.14131C3.94645 6.91942 4.29367 6.89925 4.53835 7.0808L4.60845 7.14131L9.99984 12.5324L15.3912 7.14131C15.6131 6.91942 15.9603 6.89925 16.205 7.0808L16.2751 7.14131C16.497 7.3632 16.5172 7.71042 16.3356 7.9551L16.2751 8.02519L10.4418 13.8585C10.2199 14.0804 9.87267 14.1006 9.62799 13.919L9.5579 13.8585L3.72456 8.02519C3.48048 7.78112 3.48048 7.38539 3.72456 7.14131Z'
                fill='black'
              />
            </svg>
            {show && (
              <div className={styles.duration_modal}>
                <p onClick={() => handleDurationSelect('Daily')}>Daily</p>
                <p onClick={() => handleDurationSelect('Weekly')}>Weekly</p>
                <p onClick={() => handleDurationSelect('Monthly')}>Monthly</p>
                <p onClick={() => handleDurationSelect('Yearly')}>Yearly</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <ul>
          <li>50.000</li>
          <li>40.000</li>
          <li>30.000</li>
          <li>20.000</li>
          <li>10.000</li>
          <li>5.000</li>
          <li>0</li>
        </ul>
        <div className={styles.baring}>
          <div className={styles.lines}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          <div className={styles.char}>
            <div className={`${styles.jan} ${styles.gen}`}>
              <div className={styles.bars}>
                <div className={styles.bar}></div>
                <div className={styles.tooltip}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='80'
                    height='32'
                    viewBox='0 0 80 32'
                    fill='none'
                  >
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z'
                      fill='#090C2C'
                    />
                  </svg>
                  <p>$7.000</p>
                </div>{' '}
              </div>
              <p>Jan</p>
            </div>
            <div className={styles.char}>
              <div className={`${styles.feb} ${styles.gen}`}>
                <div className={styles.bars}>
                  <div className={styles.bar}></div>
                  <div className={styles.tooltip}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='80'
                      height='32'
                      viewBox='0 0 80 32'
                      fill='none'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z'
                        fill='#090C2C'
                      />
                    </svg>
                    <p>$18.000</p>
                  </div>{' '}
                </div>
                <p>Feb</p>
              </div>
            </div>
            <div className={styles.char}>
              <div className={`${styles.mar} ${styles.gen}`}>
                <div className={styles.bars}>
                  <div className={styles.bar}></div>
                  <div className={styles.tooltip}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='80'
                      height='32'
                      viewBox='0 0 80 32'
                      fill='none'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z'
                        fill='#090C2C'
                      />
                    </svg>
                    <p>$2.500</p>
                  </div>{' '}
                </div>
                <p>Mar</p>
              </div>
            </div>
            <div className={styles.char}>
              <div className={`${styles.apr} ${styles.gen}`}>
                <div className={styles.bars}>
                  <div className={styles.bar}></div>
                  <div className={styles.tooltip}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='80'
                      height='32'
                      viewBox='0 0 80 32'
                      fill='none'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z'
                        fill='#090C2C'
                      />
                    </svg>
                    <p>$28.000</p>
                  </div>{' '}
                </div>
                <p>Apr</p>
              </div>
            </div>
            <div className={styles.char}>
              <div className={`${styles.mei} ${styles.gen}`}>
                <div className={styles.bars}>
                  <div className={styles.bar}></div>
                  <div className={styles.tooltip}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='80'
                      height='32'
                      viewBox='0 0 80 32'
                      fill='none'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z'
                        fill='#090C2C'
                      />
                    </svg>
                    <p>$8.500</p>
                  </div>{' '}
                </div>
                <p>Mei</p>
              </div>
            </div>
            <div className={styles.char}>
              <div className={`${styles.jun} ${styles.gen}`}>
                <div className={styles.bars}>
                  <div className={styles.bar}></div>
                  <div className={styles.tooltip}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='80'
                      height='32'
                      viewBox='0 0 80 32'
                      fill='none'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z'
                        fill='#090C2C'
                      />
                    </svg>
                    <p>$45.000</p>
                  </div>
                </div>
                <p>Jun</p>
              </div>
            </div>
            <div className={styles.char}>
              <div className={`${styles.jul} ${styles.gen}`}>
                <div className={styles.bars}>
                  <div className={styles.bar}></div>
                  <div className={styles.tooltip}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='80'
                      height='32'
                      viewBox='0 0 80 32'
                      fill='none'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z'
                        fill='#090C2C'
                      />
                    </svg>
                    <p>$9.000</p>
                  </div>{' '}
                </div>
                <p>Jul</p>
              </div>
            </div>
            <div className={styles.char}>
              <div className={`${styles.aug} ${styles.gen}`}>
                <div className={styles.bars}>
                  <div className={styles.bar}></div>
                  <div className={styles.tooltip}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='80'
                      height='32'
                      viewBox='0 0 80 32'
                      fill='none'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z'
                        fill='#090C2C'
                      />
                    </svg>
                    <p>$17.000</p>
                  </div>{' '}
                </div>
                <p>Aug</p>
              </div>
            </div>
            <div className={styles.char}>
              <div className={`${styles.sep} ${styles.gen}`}>
                <div className={styles.bars}>
                  <div className={styles.bar}></div>
                  <div className={styles.tooltip}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='80'
                      height='32'
                      viewBox='0 0 80 32'
                      fill='none'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z'
                        fill='#090C2C'
                      />
                    </svg>
                    <p>$31.000</p>
                  </div>{' '}
                </div>
                <p>Sep</p>
              </div>
            </div>
            <div className={styles.char}>
              <div className={`${styles.okt} ${styles.gen}`}>
                <div className={styles.bars}>
                  <div className={styles.bar}></div>
                  <div className={styles.tooltip}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='80'
                      height='32'
                      viewBox='0 0 80 32'
                      fill='none'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z'
                        fill='#090C2C'
                      />
                    </svg>
                    <p>$5.500</p>
                  </div>
                </div>
                <p>Okt</p>
              </div>
            </div>
            <div className={styles.char}>
              <div className={`${styles.nov} ${styles.gen}`}>
                <div className={styles.bars}>
                  <div className={styles.bar}></div>
                  <div className={styles.tooltip}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='80'
                      height='32'
                      viewBox='0 0 80 32'
                      fill='none'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z'
                        fill='#090C2C'
                      />
                    </svg>
                    <p>$30.000</p>
                  </div>{' '}
                </div>
                <p>Nov</p>
              </div>
            </div>
            <div className={styles.char}>
              <div className={`${styles.des} ${styles.gen}`}>
                <div className={styles.bars}>
                  <div className={styles.bar}></div>
                  <div className={styles.tooltip}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='80'
                      height='32'
                      viewBox='0 0 80 32'
                      fill='none'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M0 5C0 2.23858 2.23858 0 5 0H75C77.7614 0 80 2.23858 80 5V21C80 23.7614 77.7614 26 75 26L46 26L40 31.9771L34 26L5 26C2.23858 26 0 23.7614 0 21V5Z'
                        fill='#090C2C'
                      />
                    </svg>
                    <p>$25.000</p>
                  </div>{' '}
                </div>
                <p>Des</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart;
