import { TaxonomyNode } from '../haley-taxonomy/taxonomyNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#DomainCategory
 */
export class DomainCategory extends TaxonomyNode {
  public domainCategoryIdentifier?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#DomainCategory';
  }

  /**
   * Get property definitions for DomainCategory
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDomainCategoryIdentifier',
        tsPropertyName: 'domainCategoryIdentifier',
        type: 'number',
        required: false
      }
    ];
  }


}
