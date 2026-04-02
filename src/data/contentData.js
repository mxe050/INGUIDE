/**
 * INGUIDE Level 1 コンテンツデータ
 *
 * 構造: modules[] > sections[]
 * 各sectionのcontent[]はステップ4で本文を流し込む
 *
 * Content block types:
 *   heading, paragraph, english, japanese, bilingual,
 *   image, list, table, note, divider
 */

export const contentData = [
  // ============================================================
  // MODULE 1: Guideline Group or Panel Member
  // ============================================================
  {
    id: 'module1',
    title: 'Module 1: Guideline Group or Panel Member',
    icon: '📘',
    sections: [
      // --- Meet Your Instructor ---
      {
        id: 'm1-instructor',
        title: 'Meet Your Instructor',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      // --- PART 1: LEARNING OBJECTIVES & OVERVIEW ---
      {
        id: 'm1-p1-course-objectives',
        title: 'Course Objectives',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p1-practice-guidelines',
        title: 'Practice Guidelines',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p1-what-is-recommendation',
        title: 'What is a Recommendation?',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p1-anatomy-of-guideline',
        title: 'Anatomy of a Guideline',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p1-six-principles',
        title: 'Six Principles of Trustworthy and High-Quality Guidelines',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p1-supporting-info',
        title: 'Supporting Information',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p1-organizations',
        title: 'Organizations Typically Involved in Developing Guidelines',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p1-gin-mcmaster-checklist',
        title: 'The GIN-McMaster Checklist for Guideline Development',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p1-checklist-competencies',
        title: 'Guideline Checklist Competencies',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      // --- PART 2: THE GUIDELINE PROCESS ---
      {
        id: 'm1-p2-guideline-panel',
        title: 'People Involved in the Guideline Process – the Guideline Panel',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p2-beyond-panel',
        title: 'Other People Involved – Beyond the Panel',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p2-first-steps',
        title: 'First Steps in Guideline Development',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p2-membership-selection',
        title: 'Guideline Group Membership – Selection and Persons Involved',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p2-panel-member',
        title: 'Guideline Group Membership – the Panel Member',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p2-group-process',
        title: 'Establishing the Group Process',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p2-commitments',
        title: 'Establishing Guideline Group Processes – Commitments',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p2-what-is-expert',
        title: 'What is an Expert?',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p2-opinion-vs-evidence-1',
        title: 'Distinguishing Opinion From Evidence in Guidelines – Part 1',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p2-opinion-vs-evidence-2',
        title: 'Distinguishing Opinion From Evidence in Guidelines – Part 2',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p2-target-audience',
        title: 'Identifying the Target Audience & Understanding the Topic',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      // --- PART 3: CONSUMER & STAKEHOLDER INVOLVEMENT / COI ---
      {
        id: 'm1-p3-consumer-stakeholder',
        title: 'Consumer & Stakeholder Involvement',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p3-coi-definition',
        title: 'Conflict of Interest – Definition',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p3-coi-declaration',
        title: 'Conflict of Interest – Declaration and Management',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm1-p3-coi-gin-principles',
        title: 'Conflict of Interest – GIN Principles (Parts 1–9)',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
    ],
  },

  // ============================================================
  // MODULE 2: (PICO) Question Generation
  // ============================================================
  {
    id: 'module2',
    title: 'Module 2: (PICO) Question Generation',
    icon: '📗',
    sections: [
      // --- PART 1: GUIDELINE DEVELOPMENT PROCESS ---
      {
        id: 'm2-p1-gin-checklist',
        title: 'The GIN-McMaster Checklist for Guideline Development',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm2-p1-guidelines-and-questions',
        title: 'Guidelines and Questions',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm2-p1-generating-questions',
        title: 'Generating the Right Questions for Guideline Recommendations',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm2-p1-topics-questions-recs',
        title: 'Topics, Guideline Questions, Evidence Review Questions and Recommendations',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm2-p1-factors-importance',
        title: 'Factors that Influence if a Question is Important',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm2-p1-types-of-questions',
        title: 'Types of Questions',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm2-p1-formulating-questions',
        title: 'Formulating Questions',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm2-p1-typical-questions',
        title: 'Typical Guideline Questions',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm2-p1-guideline-evidence-questions',
        title: 'Guideline and Evidence Review Questions',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm2-p1-pico-pitfalls',
        title: 'PICO Question Generation – Pitfalls',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      // --- PART 2: THE OUTCOMES ---
      {
        id: 'm2-p2-outcomes',
        title: 'The Outcomes',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm2-p2-which-outcomes',
        title: 'Which Outcomes Should We Consider',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm2-p2-balancing-effects',
        title: 'Balancing Desirable and Undesirable Health Effects',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm2-p2-benefits-harms',
        title: 'Benefits and Harms',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm2-p2-relative-importance',
        title: 'Relative Importance of Outcomes',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm2-p2-outcome-rating',
        title: 'Approach to Outcome Rating',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm2-p2-hierarchy',
        title: 'Hierarchy of Outcomes',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm2-p2-outcome-decision-making',
        title: 'Outcome Should be Important for Decision Making',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm2-p2-framing-selecting',
        title: 'Framing Questions and Selecting Outcomes',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
    ],
  },

  // ============================================================
  // MODULE 3: Evidence
  // ============================================================
  {
    id: 'module3',
    title: 'Module 3: Evidence',
    icon: '📙',
    sections: [
      // --- PART 1: HEALTH BENEFITS AND HARMS ---
      {
        id: 'm3-p1-grade-process',
        title: 'GRADE Working Group Process',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm3-p1-questions',
        title: 'Questions',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm3-p1-balance-benefits-harms',
        title: 'Does the Balance of Benefits and Harms Favour Intervention or Not?',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm3-p1-importance-outcome',
        title: 'Importance of an Outcome',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm3-p1-example-pe-rating',
        title: 'Example of Rating for Outcome Pulmonary Embolism',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm3-p1-desirable-undesirable',
        title: 'Desirable and Undesirable Consequences',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      // --- PART 2: SYSTEMATIC REVIEWS ---
      {
        id: 'm3-p2-systematic-review',
        title: 'Systematic Review',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm3-p2-types-sr',
        title: 'Types of Systematic Reviews',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm3-p2-meta-analysis',
        title: 'Meta-Analysis',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm3-p2-pe-outcomes',
        title: 'Outcome: Pulmonary Embolism (Detailed Analysis)',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm3-p2-belief-confidence',
        title: 'Belief and Confidence',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      // --- PART 3: SUMMARIZING EVIDENCE ---
      {
        id: 'm3-p3-summarizing-evidence',
        title: 'Summarizing Evidence and Considering Additional Information',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm3-p3-contextual-factors',
        title: 'Contextual Factors',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm3-p3-certainty-frameworks',
        title: 'Judging Quality, Strength, or Certainty of Evidence – Frameworks',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm3-p3-certainty-of-evidence',
        title: 'Certainty of Evidence',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
    ],
  },

  // ============================================================
  // MODULE 4: Recommendations
  // ============================================================
  {
    id: 'module4',
    title: 'Module 4: Recommendations',
    icon: '📕',
    sections: [
      // --- PART 1: DEVELOPING RECOMMENDATIONS ---
      {
        id: 'm4-p1-process',
        title: 'Process for Developing Recommendations',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm4-p1-direction-strength',
        title: 'Recommendations Direction and Strength – Criteria',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm4-p1-conditional',
        title: 'Conditional Recommendations',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm4-p1-strong',
        title: 'Strong Recommendations',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm4-p1-etd-frameworks',
        title: 'Interactive Evidence to Decision Frameworks',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm4-p1-example-thromboembolism',
        title: 'Example: Thromboembolism Prevention in Hospitalized Patients',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm4-p1-summary-judgments',
        title: 'Summary of Judgments',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      // --- PART 2: TYPES OF RECOMMENDATIONS ---
      {
        id: 'm4-p2-voting-consensus',
        title: 'Voting vs Consensus',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm4-p2-reporting-recs',
        title: 'Reporting Recommendations',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm4-p2-strong-low-certainty',
        title: 'Strong Recommendation Based on Low or Very Low Certainty',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm4-p2-wording',
        title: 'Wording of Recommendations',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm4-p2-good-practice',
        title: 'Good Practice Statements',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      // --- PART 3: REPORTING AND PEER REVIEW ---
      {
        id: 'm4-p3-reporting-peer-review',
        title: 'Reporting and Peer Review',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm4-p3-dissemination',
        title: 'Dissemination and Implementation',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm4-p3-evaluation-use',
        title: 'Evaluation and Use',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
      {
        id: 'm4-p3-updating',
        title: 'Updating',
        content: [{ type: 'paragraph', text: '（コンテンツはステップ4で追加）' }],
      },
    ],
  },
]
