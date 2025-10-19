import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyProcessorRequest
 */
export class HaleyProcessorRequest extends VITAL_Node {
  public haleyProcessorRequestStepName?: string;
  public haleyProcessorStepTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyProcessorRequest';
  }

  /**
   * Get property definitions for HaleyProcessorRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyProcessorRequestStepName',
        tsPropertyName: 'haleyProcessorRequestStepName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyProcessorStepTypeURI',
        tsPropertyName: 'haleyProcessorStepTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
