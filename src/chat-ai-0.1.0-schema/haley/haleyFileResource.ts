import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyFileResource
 */
export class HaleyFileResource extends VITAL_Node {
  public resourceFilePath?: string;
  public resourceVersion?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyFileResource';
  }

  /**
   * Get property definitions for HaleyFileResource
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasResourceFilePath',
        tsPropertyName: 'resourceFilePath',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasResourceVersion',
        tsPropertyName: 'resourceVersion',
        type: 'string',
        required: false
      }
    ];
  }


}
