import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindProcessorResponse
 */
export class HaleyMindProcessorResponse extends VITAL_Node {
  public haleyMindContextIdentifier?: string;
  public statusOk?: boolean;
  public errorCode?: number;
  public haleyMindProcessorResponseTypeURI?: string;
  public errorMessage?: string;
  public processorRequestURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindProcessorResponse';
  }

  /**
   * Get property definitions for HaleyMindProcessorResponse
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindContextIdentifier',
        tsPropertyName: 'haleyMindContextIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#isStatusOk',
        tsPropertyName: 'statusOk',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasErrorCode',
        tsPropertyName: 'errorCode',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindProcessorResponseTypeURI',
        tsPropertyName: 'haleyMindProcessorResponseTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasErrorMessage',
        tsPropertyName: 'errorMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProcessorRequestURI',
        tsPropertyName: 'processorRequestURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
