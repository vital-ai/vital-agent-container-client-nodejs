import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance
 */
export class HaleyQuestionInstance extends VITAL_Node {
  public haleyQuestion?: string;
  public instanceOriginSessionID?: string;
  public activeInstance?: boolean;
  public instanceTimestamp?: string | Date;
  public instanceOriginAccount?: string;
  public instanceOriginTimestamp?: string | Date;
  public hiddenInGroupDisplay?: boolean;
  public instanceOriginLoginURI?: string;
  /** URI reference to one of: HaleySectionInstance, HaleyRowInstance, HaleyGroupInstance, HaleyAnswerInstance, HaleyQuestionInstance */
  public provenanceInstanceURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance';
  }

  /**
   * Get property definitions for HaleyQuestionInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyQuestion',
        tsPropertyName: 'haleyQuestion',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInstanceTimestamp',
        tsPropertyName: 'instanceTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInstanceOriginAccount',
        tsPropertyName: 'instanceOriginAccount',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInstanceOriginTimestamp',
        tsPropertyName: 'instanceOriginTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHiddenInGroupDisplay',
        tsPropertyName: 'hiddenInGroupDisplay',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInstanceOriginLoginURI',
        tsPropertyName: 'instanceOriginLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasProvenanceInstanceURI',
        tsPropertyName: 'provenanceInstanceURI',
        type: 'http://vital.ai/ontology/haley-ai-question#HaleySectionInstance | http://vital.ai/ontology/haley-ai-question#HaleyRowInstance | http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance | http://vital.ai/ontology/haley-ai-question#HaleyAnswerInstance | http://vital.ai/ontology/haley-ai-question#HaleyQuestionInstance',
        required: false,
        format: 'uri'
      }
    ];
  }


}
