import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#TargetNode
 */
export class TargetNode extends VITAL_Node {
  public targetStringValue?: string;
  public targetScore?: number;
  public targetDoubleValue?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#TargetNode';
  }

  /**
   * Get property definitions for TargetNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTargetStringValue',
        tsPropertyName: 'targetStringValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTargetScore',
        tsPropertyName: 'targetScore',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTargetDoubleValue',
        tsPropertyName: 'targetDoubleValue',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
