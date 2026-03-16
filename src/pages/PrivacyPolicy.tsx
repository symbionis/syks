import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInSection from '@/components/FadeInSection';

const sections = [
  {
    title: 'Employment of Agency',
    content:
      'CLIENT hereby permits the AGENCY to render, and AGENCY agrees to render to CLIENT, all the services customarily performed by a digital internet advertising and marketing agency within such budgets as CLIENT may set from time to time for advertising, marketing and development efforts as defined by this contract (AGREEMENT).',
  },
  {
    title: 'Advertising & Production Rates',
    items: [
      'Media costs, setup fees, production costs & hourly rates are to be set by AGENCY.',
      'Rates are subject to change at any time by AGENCY, with the exclusion of existing advertising programs or agreements currently in place.',
    ],
  },
  {
    title: 'Acceptance of Agreements',
    items: [
      'All potential forms of signature shall be governed by this AGREEMENT including, but not limited to, checking the agreement to "terms of service" box, written signature on individual project AGREEMENTs, electronic signatures, faxed signatures, scanned and emailed signatures, clear stated email approvals, and/or any other electronically clearly stated agreement to proposed change or program.',
    ],
  },
  {
    title: 'Payment & Billing Terms',
    items: [
      'CLIENT hereby agrees to pay the fees in price and schedule as listed on the agreement completed by CLIENT or in the proposal submitted to CLIENT.',
      'If full advertising budget (when applicable) is not spent due to online demand or inventory, in the event there are additional months of advertising, balance will be applied to the upcoming month(s) unless prior written communication states that any unspent amounts are to be refunded & will be promptly refunded within 7 business days.',
      'CLIENT hereby grants permission for AGENCY to charge CLIENT\'s credit, debit card or bank account on file according to the price and schedule listed on the agreement or proposal every month for the amount agreed to as the monthly spend under AGREEMENT. If the invoiced budget is a one-time charge then no monthly charge will apply. Monthly payments will be put on auto-bill and will automatically be charged to the credit card on file on the same day every month as the first payment date made.',
      'CLIENT agrees to pay upon execution of this agreement. AGENCY reserves the right to stop work until payment is made. Should collection activities become necessary, CLIENT agrees to pay all fees relating to said collection activities.',
      'AGENCY reserves the right to add late fee of 5% per month on outstanding invoices at least one month past due.',
    ],
  },
  {
    title: 'Expenses',
    items: [
      'CLIENT shall not be obligated to reimburse AGENCY for any travel or other out-of-pocket expenses incurred in the performance of services pursuant to this AGREEMENT unless expressly agreed by CLIENT in advance.',
      'AGENCY shall not be obligated to reimburse CLIENT for any travel or other out-of-pocket expenses incurred in the performance of services pursuant to this AGREEMENT unless expressly agreed by AGENCY in advance.',
    ],
  },
  {
    title: 'Make Goods / Scheduling Corrections / Technology Conflicts',
    items: [
      'In the event of an error, whether human (AGENCY or vendors of AGENCY) or technology based, AGENCY shall provide CLIENT notification and make all reasonable efforts with CLIENT approval or CLIENT discretion to make good on planned contractual obligations.',
    ],
  },
  {
    title: 'Exclusivity',
    items: [
      'CLIENT agrees that AGENCY is the exclusive provider of all contracted and executed management and services during the duration of this agreement.',
    ],
  },
  {
    title: 'Indemnification',
    items: [
      'AGENCY shall indemnify and hold CLIENT harmless with respect to any claims, loss, suit, liability or judgment suffered by AGENCY, including reasonable attorney\'s fees and costs, based upon or related to any item prepared by AGENCY or at AGENCY\'s direction, including, but not limited to, any claim of libel, slander, piracy, plagiarism, invasion of privacy, or infringement of copyright or other intellectual property interest, except where any such claim arises out of material supplied by CLIENT and incorporated into any materials or advertisement prepared by AGENCY.',
      'CLIENT agrees to indemnify and hold AGENCY harmless with respect to any claims, loss, liability, damage or judgment suffered by CLIENT, including reasonable attorney\'s fees and court costs, which results from the use by AGENCY of any material furnished by CLIENT or where material created by AGENCY or at the direction of AGENCY subject to the indemnification in subsection 1 above is materially changed by CLIENT. Information or data obtained by AGENCY from CLIENT to substantiate claims made in advertising shall be deemed to be "material furnished by CLIENT to AGENCY".',
      'In the event of any proceeding, litigation or suit against CLIENT by any regulatory agency or in the event of any court action or other proceeding challenging any advertising prepared by AGENCY, AGENCY shall assist in the preparation of the defense of such action or proceeding and cooperate with CLIENT and CLIENT\'s attorneys.',
    ],
  },
  {
    title: 'Independent Contractor',
    items: [
      'Nothing contained herein or any document executed in connection herewith, shall be construed to create an employer-employee partnership or joint venture relationship between CLIENT and AGENCY. AGENCY is an independent Contractor and not an employee of CLIENT or any of its subsidiaries or affiliates. The consideration set forth herein shall be the sole consideration due Contractor for the services rendered. It is understood that CLIENT will not withhold any amounts for payment of taxes from the compensation of Contractor hereunder. Contractor will not represent to be or hold themselves out as an employee of CLIENT and Contractor acknowledges that he/she shall not have the right or entitlement in or to any of the pension, retirement or other benefit programs now or hereafter available to regular employees.',
    ],
  },
  {
    title: 'Representations and Warranties',
    items: [
      'The AGENCY will make no representations, warranties, or commitments binding CLIENT without its prior consent.',
    ],
  },
  {
    title: 'Legal Right',
    items: [
      'AGENCY covenants and warrants that he/she has the unlimited legal right to enter into this AGREEMENT and to perform in accordance with its terms without violating the rights of others or any applicable law and that he/she has not and shall not become a party to any other agreement of any kind which conflicts with this AGREEMENT.',
      'CLIENT covenants and warrants that he/she has the unlimited legal right to enter into this AGREEMENT and to perform in accordance with its terms without violating the rights of others or any applicable law and that he/she has not and shall not become a party to any other agreement of any kind which conflicts with this AGREEMENT.',
    ],
  },
  {
    title: 'Numerical Estimates / Expectations',
    content:
      'Any project estimates provided are indicative only, since there is no guarantee of results provided for payment made. Performance is based on best efforts in order to renew beyond the AGREEMENT term. Actual results may be greater or less than the numbers shared based on the relevant characteristics of each individual business and other external factors.',
  },
  {
    title: 'Applicable Law',
    content:
      'This AGREEMENT shall be governed and construed in accordance with the laws of Jefferson County, Colorado. CLIENT agrees that any and all legal proceedings, if necessary or enforced, will reside in Jefferson County, Colorado.',
  },
  {
    title: 'Enforceability',
    content:
      'If any provision of this AGREEMENT is held by a court of competent jurisdiction to be unenforceable, the remainder of the AGREEMENT shall remain in full force and effect and shall in no way be impaired.',
  },
  {
    title: 'Term & Auto-Renewal',
    items: [
      'This AGREEMENT shall continue in force until either party terminates this AGREEMENT as per the "TERMINATION" section contained herein. Either party shall request adjustments or amendments to this AGREEMENT which will only be executed and enforced upon agreement and written signatures of both parties.',
      'This AGREEMENT will automatically renew for an additional term based on the original term length unless CLIENT declines the automatic renewal option in physical or electronic writing within 14 calendar days before the end of the original term.',
    ],
  },
  {
    title: 'No Arbitration',
    content:
      'Disputes involving this AGREEMENT, including the breach or alleged breach thereof, may not be submitted to binding arbitration (except where statutorily required) but must, instead, be heard in a court of competent jurisdiction of the State of Colorado.',
  },
  {
    title: 'Statute of Limitations',
    content:
      'Parties agree that any action in relation to an alleged breach of this Agreement shall be commenced within one year of the date of the breach, without regard to the date the breach is discovered. Any action not brought within that one year time period shall be barred, without regard to any other limitations period set forth by law or statute.',
  },
  {
    title: 'Force Majeure',
    content:
      'The affected party is excused from performance under this AGREEMENT for the duration of the Force Majeure event thereby extending the completion date. If the Force Majeure event continues past the agreed AGREEMENT completion date, the AGREEMENT may be terminated and both parties excused from their liabilities. Force Majeure events include, but not limited to, fire, explosion, strikes, riots, terrorist activity, war, acts of nature which prohibit travel, and acts of God.',
  },
  {
    title: 'Termination of Agreement',
    items: [
      'CLIENT may initiate the process to terminate this AGREEMENT at any time.',
      'Upon termination of this AGREEMENT by CLIENT, CLIENT shall pay AGENCY all outstanding balances as well as one half of the remaining balance of the agreement. The AGREEMENT shall not be cancelled until all balances and fees are paid.',
    ],
  },
  {
    title: 'Nondisclosure',
    content:
      'The AGENCY, its employees and subcontractors agree that, except as directed by the CLIENT, it will not at any time during or after the term of this Agreement disclose any confidential information. Likewise, the CLIENT agrees that it will not convey any confidential information obtained about the Developer to another party.',
  },
  {
    title: 'Conflicting Terms',
    content:
      'In the event of a conflict between the terms of this Contract (including any and all attachments thereto and amendments thereof) and the terms of Exhibit A (if applicable), the terms of Exhibit A shall control.',
  },
  {
    title: 'Severability',
    content:
      'If any provision of this Contract is held unenforceable, then such provision will be modified to reflect the parties\' intention. All remaining provisions of this Contract shall remain in full force and effect.',
  },
  {
    title: 'Attorney Fees',
    content:
      'In the event of litigation relating to the subject matter of this Agreement, the non-prevailing party shall reimburse the prevailing party for all reasonable attorney fees and costs resulting therefrom.',
  },
  {
    title: 'Non-Waiver',
    content:
      'Failure by one party of this Agreement to require performance of any provision(s) shall not affect that party\'s right to require subsequent performance at any time thereafter, nor shall a waiver of any breach or default of this Agreement constitute a waiver of any subsequent breach or default or a waiver of the provision itself.',
  },
  {
    title: 'Partnership or Agency',
    content:
      'The relationship between parties is not to be construed as a partnership or agency and this Contract does not create either form of relationship.',
  },
  {
    title: 'Consequential Damages',
    content:
      'Neither party to this Agreement will be held responsible for consequential (indirect) damages (e.g., loss of profit) because of any alleged failures by the other party.',
  },
  {
    title: 'Signature Authority',
    content:
      'Both parties warrant that they have read and understand the terms set forth in this agreement. Each party hereby represents and warrants that s/he is duly authorized to execute and deliver this Agreement on behalf of Other Party and that this Agreement is binding upon Other Party in accordance with its terms.',
  },
  {
    title: 'Non-Circumvent',
    items: [
      'CLIENT, its officers, directors, employees, agents, affiliates, consultants, subsidiaries, assignees or any individual or any entity acting on its behalf, shall not make any contact with, deal with or otherwise involve itself or themselves in any transaction with any Vendor, Employee or Contractor of AGENCY without the prior written permission of the AGENCY.',
      'CLIENT, its officers, directors, employees, agents, affiliates, consultants, subsidiaries, assignees or any individual or any entity acting on its behalf, confirm that any corporation, organization, firm, company or individual of which any of the above-referenced individuals or entities is a party to, employee of, member of, or otherwise which would benefit financially from an association, is bound by this AGREEMENT.',
      'In the event that the AGENCY ends its contractual or business relationship with any of its current or future Vendors, Employees or Contractors, CLIENT agrees that it shall not directly enter into any subsequent contractual or business relationship with any such former Vendors, Employees or Contractors.',
      'These terms shall be valid and enforceable for five (5) years from the Effective Date and is to be applied to any and all transactions entered into by the CLIENT.',
      'In the event that the CLIENT breaches any term or condition of this AGREEMENT, CLIENT acknowledges that the amount of damages potentially incurred by the AGENCY would be difficult to ascertain, and agrees to pay to the AGENCY liquidated damages in the amount of Ten Thousand Dollars ($10,000.00), per breach.',
      'The Parties agree that the terms and conditions of this AGREEMENT, including but not limited to its existence, and the nature thereof, and the names of any and all Vendors, Employees and Contractors, shall be considered strictly confidential.',
    ],
  },
  {
    title: 'Entire Agreement',
    content:
      'This AGREEMENT constitutes the entire AGREEMENT between the parties with respect to the Project subject matter. It supersedes all previous AGREEMENTs and understandings between the parties and each party acknowledges that, in entering into this AGREEMENT, it does not do so on the basis of or in reliance upon any representations, promises, undertakings, warranties or other statements (whether written or oral) of any nature whatsoever except as expressly provided in this AGREEMENT.',
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="bg-canvas">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-navy pt-32 pb-20 lg:pt-44 lg:pb-28">
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10">
            <FadeInSection>
              <h1 className="text-headline text-ivory tracking-tight">Privacy Policy</h1>
            </FadeInSection>
            <FadeInSection delay={100}>
              <p className="mt-6 text-ivory/60 text-body leading-relaxed max-w-3xl">
                Purchasing organization, referred to as (CLIENT), and SYKS sarl (CH-660.5.684.023-6), referred to as (AGENCY), agree as entered into this agreement on the date and time of the order submission.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div className="space-y-12">
              {sections.map((section, i) => (
                <FadeInSection key={section.title} delay={50 + i * 30}>
                  <div className="border-t border-foreground/[0.08] pt-8">
                    <h2 className="text-lg font-medium text-foreground tracking-wide">
                      {section.title}
                    </h2>
                    {section.content && (
                      <p className="mt-4 text-foreground/[0.72] text-[15px] leading-relaxed">
                        {section.content}
                      </p>
                    )}
                    {section.items && (
                      <ol className="mt-4 space-y-3 list-decimal list-outside pl-5">
                        {section.items.map((item, j) => (
                          <li key={j} className="text-foreground/[0.72] text-[15px] leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
