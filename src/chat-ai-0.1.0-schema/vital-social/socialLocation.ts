import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#SocialLocation
 */
export class SocialLocation extends VITAL_Node {
  public socialLocationRadius?: number;
  public socialLocation?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#SocialLocation';
  }

  /**
   * Get property definitions for SocialLocation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSocialLocationRadius',
        tsPropertyName: 'socialLocationRadius',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSocialLocation',
        tsPropertyName: 'socialLocation',
        type: 'string',
        required: false
      }
    ];
  }


}
