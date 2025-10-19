import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Bot
 */
export class Bot extends VITAL_Node {
  public autoLoadUserProfile?: boolean;
  public keepLoaded?: boolean;
  public globalBot?: boolean;
  public vitalRulesEnabled?: boolean;
  public acceptSystemTicks?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Bot';
  }

  /**
   * Get property definitions for Bot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAutoLoadUserProfile',
        tsPropertyName: 'autoLoadUserProfile',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isKeepLoaded',
        tsPropertyName: 'keepLoaded',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGlobalBot',
        tsPropertyName: 'globalBot',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isVitalRulesEnabled',
        tsPropertyName: 'vitalRulesEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAcceptSystemTicks',
        tsPropertyName: 'acceptSystemTicks',
        type: 'boolean',
        required: false
      }
    ];
  }


}
