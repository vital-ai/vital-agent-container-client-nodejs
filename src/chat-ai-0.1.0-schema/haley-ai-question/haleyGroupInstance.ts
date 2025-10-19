import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance
 */
export class HaleyGroupInstance extends VITAL_Node {
  public suppressEmptyAnswerValues?: boolean;
  public haleyGroup?: string;
  public haleyGroupBaseVersion?: string;
  public instanceOriginSessionID?: string;
  public activeInstance?: boolean;
  public instanceTimestamp?: string | Date;
  public instanceOriginTimestamp?: string | Date;
  public haleyGroupBase?: string;
  /** URI reference to one of: HaleySectionInstance, HaleyRowInstance, HaleyGroupInstance, HaleyAnswerInstance, HaleyQuestionInstance */
  public provenanceInstanceURI?: string;
  public instanceOriginAccount?: string;
  public instanceOriginLoginURI?: string;
  public ableToRemoveGroup?: boolean;
  public inconsistentGroupInstance?: boolean;
  public selectedGroupInstance?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyGroupInstance';
  }

  /**
   * Get property definitions for HaleyGroupInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSuppressEmptyAnswerValues',
        tsPropertyName: 'suppressEmptyAnswerValues',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroup',
        tsPropertyName: 'haleyGroup',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBaseVersion',
        tsPropertyName: 'haleyGroupBaseVersion',
        type: 'string',
        required: false
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInstanceOriginTimestamp',
        tsPropertyName: 'instanceOriginTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBase',
        tsPropertyName: 'haleyGroupBase',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isAbleToRemoveGroup',
        tsPropertyName: 'ableToRemoveGroup',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isInconsistentGroupInstance',
        tsPropertyName: 'inconsistentGroupInstance',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSelectedGroupInstance',
        tsPropertyName: 'selectedGroupInstance',
        type: 'boolean',
        required: false
      }
    ];
  }


}
