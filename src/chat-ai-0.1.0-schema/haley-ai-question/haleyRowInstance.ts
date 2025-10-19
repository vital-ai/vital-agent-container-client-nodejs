import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyRowInstance
 */
export class HaleyRowInstance extends VITAL_Node {
  public instanceTimestamp?: string | Date;
  public instanceOriginTimestamp?: string | Date;
  public hiddenInGroupDisplay?: boolean;
  public secondarySource?: boolean;
  /** URI reference to one of: HaleySectionInstance, HaleyRowInstance, HaleyGroupInstance, HaleyAnswerInstance, HaleyQuestionInstance */
  public provenanceInstanceURI?: string;
  public haleyRowTypeURI?: string;
  public ableToBeDeleted?: boolean;
  public suppressEmptyAnswerValues?: boolean;
  public haleyRow?: string;
  public haleyBeliefModeURI?: string;
  public instanceOriginSessionID?: string;
  public activeInstance?: boolean;
  public readOnlyRowValue?: boolean;
  public haleyRowInstanceDerivationTypeURI?: string;
  public selectedRowInstance?: boolean;
  public instanceOriginAccount?: string;
  public instanceOriginLoginURI?: string;
  public rowInstanceCounter?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyRowInstance';
  }

  /**
   * Get property definitions for HaleyRowInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHiddenInGroupDisplay',
        tsPropertyName: 'hiddenInGroupDisplay',
        type: 'boolean',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyRowTypeURI',
        tsPropertyName: 'haleyRowTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isAbleToBeDeleted',
        tsPropertyName: 'ableToBeDeleted',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSuppressEmptyAnswerValues',
        tsPropertyName: 'suppressEmptyAnswerValues',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyRow',
        tsPropertyName: 'haleyRow',
        type: 'string',
        required: false,
        format: 'uri'
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isReadOnlyRowValue',
        tsPropertyName: 'readOnlyRowValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyRowInstanceDerivationTypeURI',
        tsPropertyName: 'haleyRowInstanceDerivationTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSelectedRowInstance',
        tsPropertyName: 'selectedRowInstance',
        type: 'boolean',
        required: false
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasRowInstanceCounter',
        tsPropertyName: 'rowInstanceCounter',
        type: 'string',
        required: false
      }
    ];
  }


}
