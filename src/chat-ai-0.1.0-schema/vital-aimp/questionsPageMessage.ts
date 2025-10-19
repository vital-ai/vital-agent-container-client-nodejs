import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#QuestionsPageMessage
 */
export class QuestionsPageMessage extends AIMPMessage {
  public previousButtonLabel?: string;
  public saveAnswersOnGoingBack?: boolean;
  public status?: string;
  public page?: number;
  public staticQuestionsList?: boolean;
  public scrollToQuestionIndex?: number;
  public totalPages?: number;
  public multiChoiceQuestionInstruction?: string;
  public previousButtonEnabled?: boolean;
  public nextButtonEnabled?: boolean;
  public nextButtonLabel?: string;
  public hidePageCount?: boolean;
  public goodbyePage?: boolean;
  public submitButtonLabel?: string;
  public questionCountPanelDisabled?: boolean;
  public questionsPageThemeURI?: string;
  public submitButtonEnabled?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#QuestionsPageMessage';
  }

  /**
   * Get property definitions for QuestionsPageMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPreviousButtonLabel',
        tsPropertyName: 'previousButtonLabel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSaveAnswersOnGoingBack',
        tsPropertyName: 'saveAnswersOnGoingBack',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatus',
        tsPropertyName: 'status',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPage',
        tsPropertyName: 'page',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isStaticQuestionsList',
        tsPropertyName: 'staticQuestionsList',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasScrollToQuestionIndex',
        tsPropertyName: 'scrollToQuestionIndex',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTotalPages',
        tsPropertyName: 'totalPages',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMultiChoiceQuestionInstruction',
        tsPropertyName: 'multiChoiceQuestionInstruction',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isPreviousButtonEnabled',
        tsPropertyName: 'previousButtonEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isNextButtonEnabled',
        tsPropertyName: 'nextButtonEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasNextButtonLabel',
        tsPropertyName: 'nextButtonLabel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isHidePageCount',
        tsPropertyName: 'hidePageCount',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGoodbyePage',
        tsPropertyName: 'goodbyePage',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSubmitButtonLabel',
        tsPropertyName: 'submitButtonLabel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isQuestionCountPanelDisabled',
        tsPropertyName: 'questionCountPanelDisabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionsPageThemeURI',
        tsPropertyName: 'questionsPageThemeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSubmitButtonEnabled',
        tsPropertyName: 'submitButtonEnabled',
        type: 'boolean',
        required: false
      }
    ];
  }


}
