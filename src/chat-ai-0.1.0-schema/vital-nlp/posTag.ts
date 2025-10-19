import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#PosTag
 */
export class PosTag extends VITAL_Node {
  public confidence?: number;
  public tagValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#PosTag';
  }

  /**
   * Get property definitions for PosTag
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasConfidence',
        tsPropertyName: 'confidence',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTagValue',
        tsPropertyName: 'tagValue',
        type: 'string',
        required: false
      }
    ];
  }


}
