import { DialogAction } from './dialogAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Question
 */
export class Question extends DialogAction {
  public internalAnswerProcessingEnabled?: boolean;
  public questionCountExcluded?: boolean;
  public propertyName?: string;
  public placeholder?: string;
  public questionPreviousContent?: string;
  public index?: number;
  public processWithChatRules?: boolean;
  public hidden?: boolean;
  public description?: string;
  public interruptedFactName?: string;
  public handlerResultFactName?: string;
  public questionContent?: string;
  public dialogToCallName?: string;
  public internalProcessingChoice?: string;
  public constraints?: string;
  public sameAsCheckBoxLabel?: string;
  public skippable?: boolean;
  public propertyType?: string;
  public internalOnly?: boolean;
  public readOnlyQuestion?: boolean;
  public sameAsCheckboxEnabled?: boolean;
  public targetChannel?: string;
  public sendAsUser?: boolean;
  public currentChannelTarget?: boolean;
  public questionOption?: string;
  public questionType?: string;
  public otherChannelTarget?: boolean;
  public shortDescription?: string;
  public text?: string;
  public maxRetriesCount?: number;
  public ignoreStandardIntents?: boolean;
  public scriptBody?: string;
  public questionSubType?: string;
  public previousAnswer?: string;
  public broadcastOnly?: boolean;
  public conditionalLogic?: string;
  public sectionHeaderHTML?: string;
  public chatRulesOutputFactName?: string;
  public prefilledAnswer?: string;
  public handlerEnabled?: boolean;
  public columnsDefinition?: string;
  public textChannelFactName?: string;
  public dialogToCallScope?: string;
  public chatRulesOutputChannelFactName?: string;
  public textToSpeak?: string;
  public questionDataJSON?: string;
  public requestType?: string;
  public textFactName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Question';
  }

  /**
   * Get property definitions for Question
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isInternalAnswerProcessingEnabled',
        tsPropertyName: 'internalAnswerProcessingEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isQuestionCountExcluded',
        tsPropertyName: 'questionCountExcluded',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyName',
        tsPropertyName: 'propertyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPlaceholder',
        tsPropertyName: 'placeholder',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionPreviousContent',
        tsPropertyName: 'questionPreviousContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasIndex',
        tsPropertyName: 'index',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isProcessWithChatRules',
        tsPropertyName: 'processWithChatRules',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isHidden',
        tsPropertyName: 'hidden',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDescription',
        tsPropertyName: 'description',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInterruptedFactName',
        tsPropertyName: 'interruptedFactName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasHandlerResultFactName',
        tsPropertyName: 'handlerResultFactName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionContent',
        tsPropertyName: 'questionContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDialogToCallName',
        tsPropertyName: 'dialogToCallName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInternalProcessingChoice',
        tsPropertyName: 'internalProcessingChoice',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasConstraints',
        tsPropertyName: 'constraints',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSameAsCheckBoxLabel',
        tsPropertyName: 'sameAsCheckBoxLabel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSkippable',
        tsPropertyName: 'skippable',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyType',
        tsPropertyName: 'propertyType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isInternalOnly',
        tsPropertyName: 'internalOnly',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isReadOnlyQuestion',
        tsPropertyName: 'readOnlyQuestion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSameAsCheckboxEnabled',
        tsPropertyName: 'sameAsCheckboxEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTargetChannel',
        tsPropertyName: 'targetChannel',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSendAsUser',
        tsPropertyName: 'sendAsUser',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCurrentChannelTarget',
        tsPropertyName: 'currentChannelTarget',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionOption',
        tsPropertyName: 'questionOption',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionType',
        tsPropertyName: 'questionType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isOtherChannelTarget',
        tsPropertyName: 'otherChannelTarget',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasShortDescription',
        tsPropertyName: 'shortDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasText',
        tsPropertyName: 'text',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMaxRetriesCount',
        tsPropertyName: 'maxRetriesCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isIgnoreStandardIntents',
        tsPropertyName: 'ignoreStandardIntents',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasScriptBody',
        tsPropertyName: 'scriptBody',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionSubType',
        tsPropertyName: 'questionSubType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPreviousAnswer',
        tsPropertyName: 'previousAnswer',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isBroadcastOnly',
        tsPropertyName: 'broadcastOnly',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasConditionalLogic',
        tsPropertyName: 'conditionalLogic',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSectionHeaderHTML',
        tsPropertyName: 'sectionHeaderHTML',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatRulesOutputFactName',
        tsPropertyName: 'chatRulesOutputFactName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPrefilledAnswer',
        tsPropertyName: 'prefilledAnswer',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isHandlerEnabled',
        tsPropertyName: 'handlerEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasColumnsDefinition',
        tsPropertyName: 'columnsDefinition',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTextChannelFactName',
        tsPropertyName: 'textChannelFactName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDialogToCallScope',
        tsPropertyName: 'dialogToCallScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatRulesOutputChannelFactName',
        tsPropertyName: 'chatRulesOutputChannelFactName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTextToSpeak',
        tsPropertyName: 'textToSpeak',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionDataJSON',
        tsPropertyName: 'questionDataJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRequestType',
        tsPropertyName: 'requestType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTextFactName',
        tsPropertyName: 'textFactName',
        type: 'string',
        required: false
      }
    ];
  }


}
