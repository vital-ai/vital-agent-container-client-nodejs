import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance
 */
export class HaleyAnswerInstance extends VITAL_Node {
  public haleyAnswerInstanceDependencyStatus?: string;
  public haleyAnswerType?: string;
  public readOnlyAnswerValue?: boolean;
  public haleyAnswerFollowupType?: string;
  public haleyAnswer?: string;
  public answerValue?: string;
  public haleyAnswerConstantURI?: string;
  public instanceTimestamp?: string | Date;
  public instanceOriginTimestamp?: string | Date;
  public fallbackAnswerValueEncoding?: string;
  public secondarySource?: boolean;
  /** URI reference to one of: HaleySectionInstance, HaleyRowInstance, HaleyGroupInstance, HaleyAnswerInstance, HaleyQuestionInstance */
  public provenanceInstanceURI?: string;
  public haleyAnswerInstanceDerivationTypeURI?: string;
  public suppressEmptyAnswerValues?: boolean;
  public haleyBeliefModeURI?: string;
  public instanceOriginSessionID?: string;
  public activeInstance?: boolean;
  public haleyMappedAnswerInstance?: string;
  public answerInstanceInteractionTypeURI?: string;
  public instanceOriginAccount?: string;
  public instanceOriginLoginURI?: string;
  public fallbackAnswerValue?: string;
  public enhancementRuleSourceURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance';
  }

  /**
   * Get property definitions for HaleyAnswerInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstanceDependencyStatus',
        tsPropertyName: 'haleyAnswerInstanceDependencyStatus',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerType',
        tsPropertyName: 'haleyAnswerType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isReadOnlyAnswerValue',
        tsPropertyName: 'readOnlyAnswerValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerFollowupType',
        tsPropertyName: 'haleyAnswerFollowupType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswer',
        tsPropertyName: 'haleyAnswer',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerValue',
        tsPropertyName: 'answerValue',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstantURI',
        tsPropertyName: 'haleyAnswerConstantURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInstanceTimestamp',
        tsPropertyName: 'instanceTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInstanceOriginTimestamp',
        tsPropertyName: 'instanceOriginTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasFallbackAnswerValueEncoding',
        tsPropertyName: 'fallbackAnswerValueEncoding',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSecondarySource',
        tsPropertyName: 'secondarySource',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasProvenanceInstanceURI',
        tsPropertyName: 'provenanceInstanceURI',
        type: 'http://vital.ai/ontology/haley-ai-question#HaleySectionInstance | http://vital.ai/ontology/haley-ai-question#HaleyRowInstance | http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance | http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance | http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstanceDerivationTypeURI',
        tsPropertyName: 'haleyAnswerInstanceDerivationTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSuppressEmptyAnswerValues',
        tsPropertyName: 'suppressEmptyAnswerValues',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyBeliefModeURI',
        tsPropertyName: 'haleyBeliefModeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInstanceOriginSessionID',
        tsPropertyName: 'instanceOriginSessionID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isActiveInstance',
        tsPropertyName: 'activeInstance',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyMappedAnswerInstance',
        tsPropertyName: 'haleyMappedAnswerInstance',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceInteractionTypeURI',
        tsPropertyName: 'answerInstanceInteractionTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInstanceOriginAccount',
        tsPropertyName: 'instanceOriginAccount',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInstanceOriginLoginURI',
        tsPropertyName: 'instanceOriginLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasFallbackAnswerValue',
        tsPropertyName: 'fallbackAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasEnhancementRuleSourceURI',
        tsPropertyName: 'enhancementRuleSourceURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
