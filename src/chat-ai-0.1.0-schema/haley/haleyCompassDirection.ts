import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyCompassDirection
 */
export class HaleyCompassDirection extends VITAL_Node {
  public compassDirectionSymbol?: string;
  public compassDirectionPosition?: number;
  public compassDirectionLabel?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyCompassDirection';
  }

  /**
   * Get property definitions for HaleyCompassDirection
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCompassDirectionSymbol',
        tsPropertyName: 'compassDirectionSymbol',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCompassDirectionPosition',
        tsPropertyName: 'compassDirectionPosition',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCompassDirectionLabel',
        tsPropertyName: 'compassDirectionLabel',
        type: 'string',
        required: false
      }
    ];
  }


}
