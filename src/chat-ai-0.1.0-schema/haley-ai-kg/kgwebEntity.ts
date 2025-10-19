import { KGEntity } from './kgentity';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGWebEntity
 */
export class KGWebEntity extends KGEntity {
  public kGWebEntityDomainCategories?: number;
  public kGWebEntityPrimaryDomain?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGWebEntity';
  }

  /**
   * Get property definitions for KGWebEntity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGWebEntityDomainCategories',
        tsPropertyName: 'kGWebEntityDomainCategories',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGWebEntityPrimaryDomain',
        tsPropertyName: 'kGWebEntityPrimaryDomain',
        type: 'string',
        required: false
      }
    ];
  }


}
