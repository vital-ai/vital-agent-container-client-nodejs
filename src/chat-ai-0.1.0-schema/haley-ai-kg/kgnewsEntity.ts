import { KGEntity } from './kgentity';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGNewsEntity
 */
export class KGNewsEntity extends KGEntity {
  public kGNewsEntityPrimaryDomain?: string;
  public kGNewsEntityBiasMetric?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGNewsEntity';
  }

  /**
   * Get property definitions for KGNewsEntity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGNewsEntityPrimaryDomain',
        tsPropertyName: 'kGNewsEntityPrimaryDomain',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGNewsEntityBiasMetric',
        tsPropertyName: 'kGNewsEntityBiasMetric',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
