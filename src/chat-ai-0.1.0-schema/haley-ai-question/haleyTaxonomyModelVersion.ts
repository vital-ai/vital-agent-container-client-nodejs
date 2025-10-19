import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModelVersion
 */
export class HaleyTaxonomyModelVersion extends VITAL_Node {
  public haleyTaxonomyBaseVersion?: string;
  public haleyTaxonomyBase?: string;
  public haleyTaxonomyModelVersionDeactivateDate?: string | Date;
  public activeTaxonomyModelVersion?: boolean;
  public haleyTaxonomyModelURI?: string;
  public haleyTaxonomyModelVersionActivateDate?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyModelVersion';
  }

  /**
   * Get property definitions for HaleyTaxonomyModelVersion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBaseVersion',
        tsPropertyName: 'haleyTaxonomyBaseVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBase',
        tsPropertyName: 'haleyTaxonomyBase',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelVersionDeactivateDate',
        tsPropertyName: 'haleyTaxonomyModelVersionDeactivateDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isActiveTaxonomyModelVersion',
        tsPropertyName: 'activeTaxonomyModelVersion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelURI',
        tsPropertyName: 'haleyTaxonomyModelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyModelVersionActivateDate',
        tsPropertyName: 'haleyTaxonomyModelVersionActivateDate',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
